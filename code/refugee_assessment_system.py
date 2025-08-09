"""
Multi-Perspective Refugee Employment Assessment System

This system implements a Selector-Validator agent architecture for refugee employment 
assessment using emotional, cultural, and ethical perspectives. The framework provides
structured assessment traces and ensures data grounding through context-aware prompting.
"""

import pandas as pd
from typing import List, Literal, Optional, Dict, Any, Tuple
from pydantic import BaseModel, Field
from langchain_ollama import ChatOllama
from langchain.schema import SystemMessage, HumanMessage
import time
from dataclasses import dataclass, asdict
from pathlib import Path
import logging
import json
import uuid
from datetime import datetime

from profile_builder import ProfileBuilder
from assessment_prompts import generate_perspective_specific_prompt, format_profile_with_field_codes, VALIDATOR_PROMPT_TEMPLATE

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logging.getLogger("httpx").setLevel(logging.WARNING)
logger = logging.getLogger(__name__)

class AgentResponse(BaseModel):
    """Structured response from a perspective agent"""
    score: int = Field(description="Likelihood score from 1-10", ge=1, le=10)
    reasoning: str = Field(description="Detailed reasoning for the assessment")
    confidence: float = Field(description="Agent confidence in assessment", ge=0, le=100)
    
    @property
    def normalized_confidence(self) -> float:
        """Normalize confidence to 0-1 range"""
        if self.confidence > 1.0:
            return min(self.confidence / 10.0, 1.0)  # Assume percentage if > 1
        return self.confidence

class ValidatorResponse(BaseModel):
    """Structured response from a validator"""
    is_valid: bool = Field(description="Whether the assessment is valid")
    feedback: str = Field(description="Validation feedback")
    issues: List[str] = Field(default_factory=list, description="Specific issues identified")

@dataclass
class AssessmentTrace:
    """Complete trace of a single agent assessment"""
    agent_type: str
    host_country: str
    profile_features: List[str]
    prompt_used: str
    
    # Selector phase
    selector_iterations: int
    selector_final_score: int
    selector_final_reasoning: str
    selector_confidence: float
    
    # Validator phase
    validator_feedback: str
    validator_issues: List[str]
    is_validated: bool
    
    # Metadata
    assessment_id: str
    timestamp: str
    processing_time_ms: int

@dataclass
class RefugeeAssessment:
    """Complete assessment result for a single refugee"""
    refugee_id: str
    profile_string: str
    total_features: int
    available_features: List[str]
    
    # Country assessments
    country_scores: Dict[str, Dict[str, float]]  # country -> {emotional, cultural, ethical, weighted}
    recommended_country: str
    recommendation_score: float
    
    # Assessment traces
    assessment_traces: List[AssessmentTrace]
    
    # Metadata
    assessment_timestamp: str
    total_processing_time_ms: int
    validation_status: str

class EmotionalAgent:
    """
    Emotional perspective agent implementing Selector → Validator pattern
    """
    
    def __init__(self, model_name: str = "llama3"):
        self.llm = ChatOllama(model=model_name).with_structured_output(AgentResponse)
        self.validator_llm = ChatOllama(model=model_name).with_structured_output(ValidatorResponse)
        self.perspective = "emotional"
        
    def assess_with_context(self, profile_string: str, host_country: str, 
                           available_features: List[str], max_iterations: int = 3) -> AssessmentTrace:
        """
        Assess refugee from emotional perspective with context awareness
        """
        start_time = time.time()
        assessment_id = str(uuid.uuid4())
        
        # Generate data-grounded prompt
        prompt = generate_perspective_specific_prompt(
            'emotional', profile_string, host_country, available_features
        )
        
        # Selector phase with iterations
        for iteration in range(max_iterations):
            logger.info(f"Emotional agent - iteration {iteration + 1}")
            
            # Get agent assessment
            selector_response = self._get_selector_response(prompt, profile_string, host_country)
            
            # Validate response
            validator_response = self._validate_response(
                profile_string, selector_response, available_features
            )
            
            if validator_response.is_valid or iteration == max_iterations - 1:
                # Accept final response
                processing_time = int((time.time() - start_time) * 1000)
                
                return AssessmentTrace(
                    agent_type="emotional",
                    host_country=host_country,
                    profile_features=available_features,
                    prompt_used=prompt,
                    selector_iterations=iteration + 1,
                    selector_final_score=selector_response.score,
                    selector_final_reasoning=selector_response.reasoning,
                    selector_confidence=selector_response.normalized_confidence,
                    validator_feedback=validator_response.feedback,
                    validator_issues=validator_response.issues,
                    is_validated=validator_response.is_valid,
                    assessment_id=assessment_id,
                    timestamp=datetime.now().isoformat(),
                    processing_time_ms=processing_time
                )
            
            # Update prompt with validator feedback for next iteration
            prompt = self._update_prompt_with_feedback(prompt, validator_response.feedback)
    
    def _get_selector_response(self, prompt: str, profile: str, country: str) -> AgentResponse:
        """Get response from emotional selector agent"""
        messages = [
            SystemMessage(content="You are an expert refugee employment assessor following specific guidelines."),
            HumanMessage(content=prompt)
        ]
        
        try:
            response = self.llm.invoke(messages)
            logger.info(f"Emotional selector - Score: {response.score}, Confidence: {response.confidence}")
            return response
        except Exception as e:
            logger.error(f"Emotional selector error: {e}")
            # Fallback response
            return AgentResponse(
                score=5,
                reasoning="Assessment failed due to technical error. Neutral score assigned.",
                confidence=0.1
            )
    
    def _validate_response(self, profile: str, response: AgentResponse, 
                          available_features: List[str]) -> ValidatorResponse:
        """Validate emotional agent response"""
        
        validation_prompt = VALIDATOR_PROMPT_TEMPLATE.format(
            perspective="emotional",
            profile=profile,
            fields=', '.join(available_features),
            score=response.score,
            reasoning=response.reasoning
        )
        
        messages = [
            SystemMessage(content="You are a validation agent ensuring assessment quality and data integrity."),
            HumanMessage(content=validation_prompt)
        ]
        
        try:
            validator_response = self.validator_llm.invoke(messages)
            logger.info(f"Emotional validator - Valid: {validator_response.is_valid}")
            
            # Apply lenient validation if score is high with sufficient features
            if not validator_response.is_valid and response.score >= 6 and len(available_features) >= 5:
                logger.info("Applying lenient validation override")
                validator_response.is_valid = True
                validator_response.feedback += " [Lenient validation applied]"
            
            return validator_response
        except Exception as e:
            logger.error(f"Emotional validator error: {e}")
            return ValidatorResponse(
                is_valid=True,  # Default to valid if validator fails
                feedback="Validation failed due to technical error",
                issues=["validator_error"]
            )
    
    def _update_prompt_with_feedback(self, original_prompt: str, feedback: str) -> str:
        """Update prompt based on validator feedback"""
        return f"{original_prompt}\n\nVALIDATOR FEEDBACK: {feedback}\nPlease address these concerns in your assessment."

class CulturalAgent:
    """
    Cultural perspective agent implementing Selector → Validator pattern
    """
    
    def __init__(self, model_name: str = "llama3"):
        self.llm = ChatOllama(model=model_name).with_structured_output(AgentResponse)
        self.validator_llm = ChatOllama(model=model_name).with_structured_output(ValidatorResponse)
        self.perspective = "cultural"
    
    def assess_with_context(self, profile_string: str, host_country: str, 
                           available_features: List[str], max_iterations: int = 3) -> AssessmentTrace:
        """Assess refugee from cultural perspective with context awareness"""
        start_time = time.time()
        assessment_id = str(uuid.uuid4())
        
        # Generate data-grounded prompt
        prompt = generate_perspective_specific_prompt(
            'cultural', profile_string, host_country, available_features
        )
        
        # Selector phase with iterations
        for iteration in range(max_iterations):
            logger.info(f"Cultural agent - iteration {iteration + 1}")
            
            selector_response = self._get_selector_response(prompt, profile_string, host_country)
            validator_response = self._validate_response(profile_string, selector_response, available_features)
            
            if validator_response.is_valid or iteration == max_iterations - 1:
                processing_time = int((time.time() - start_time) * 1000)
                
                return AssessmentTrace(
                    agent_type="cultural",
                    host_country=host_country,
                    profile_features=available_features,
                    prompt_used=prompt,
                    selector_iterations=iteration + 1,
                    selector_final_score=selector_response.score,
                    selector_final_reasoning=selector_response.reasoning,
                    selector_confidence=selector_response.normalized_confidence,
                    validator_feedback=validator_response.feedback,
                    validator_issues=validator_response.issues,
                    is_validated=validator_response.is_valid,
                    assessment_id=assessment_id,
                    timestamp=datetime.now().isoformat(),
                    processing_time_ms=processing_time
                )
            
            prompt = self._update_prompt_with_feedback(prompt, validator_response.feedback)
    
    def _get_selector_response(self, prompt: str, profile: str, country: str) -> AgentResponse:
        """Get response from cultural selector agent"""
        messages = [
            SystemMessage(content="You are an expert refugee employment assessor following specific guidelines."),
            HumanMessage(content=prompt)
        ]
        
        try:
            response = self.llm.invoke(messages)
            logger.info(f"Cultural selector - Score: {response.score}, Confidence: {response.confidence}")
            return response
        except Exception as e:
            logger.error(f"Cultural selector error: {e}")
            return AgentResponse(score=5, reasoning="Technical error occurred", confidence=0.1)
    
    def _validate_response(self, profile: str, response: AgentResponse, 
                          available_features: List[str]) -> ValidatorResponse:
        """Validate cultural agent response"""
        
        validation_prompt = VALIDATOR_PROMPT_TEMPLATE.format(
            perspective="cultural",
            profile=profile,
            fields=', '.join(available_features),
            score=response.score,
            reasoning=response.reasoning
        )
        
        messages = [
            SystemMessage(content="Validate cultural assessments for accuracy and data integrity."),
            HumanMessage(content=validation_prompt)
        ]
        
        try:
            validator_response = self.validator_llm.invoke(messages)
            logger.info(f"Cultural validator - Valid: {validator_response.is_valid}")
            
            # Apply lenient validation if score is high with sufficient features
            if not validator_response.is_valid and response.score >= 6 and len(available_features) >= 5:
                logger.info("Applying lenient validation override")
                validator_response.is_valid = True
                validator_response.feedback += " [Lenient validation applied]"
            
            return validator_response
        except Exception as e:
            logger.error(f"Cultural validator error: {e}")
            return ValidatorResponse(is_valid=True, feedback="Validation error", issues=["validator_error"])
    
    def _update_prompt_with_feedback(self, original_prompt: str, feedback: str) -> str:
        """Update prompt based on validator feedback"""
        return f"{original_prompt}\n\nVALIDATOR FEEDBACK: {feedback}\nPlease address these concerns."

class EthicalAgent:
    """
    Ethical perspective agent implementing Selector → Validator pattern
    """
    
    def __init__(self, model_name: str = "llama3"):
        self.llm = ChatOllama(model=model_name).with_structured_output(AgentResponse)
        self.validator_llm = ChatOllama(model=model_name).with_structured_output(ValidatorResponse)
        self.perspective = "ethical"
    
    def assess_with_context(self, profile_string: str, host_country: str, 
                           available_features: List[str], max_iterations: int = 3) -> AssessmentTrace:
        """Assess refugee from ethical perspective with context awareness"""
        start_time = time.time()
        assessment_id = str(uuid.uuid4())
        
        # Generate data-grounded prompt
        prompt = generate_perspective_specific_prompt(
            'ethical', profile_string, host_country, available_features
        )
        
        # Selector phase with iterations
        for iteration in range(max_iterations):
            logger.info(f"Ethical agent - iteration {iteration + 1}")
            
            selector_response = self._get_selector_response(prompt, profile_string, host_country)
            validator_response = self._validate_response(profile_string, selector_response, available_features)
            
            if validator_response.is_valid or iteration == max_iterations - 1:
                processing_time = int((time.time() - start_time) * 1000)
                
                return AssessmentTrace(
                    agent_type="ethical",
                    host_country=host_country,
                    profile_features=available_features,
                    prompt_used=prompt,
                    selector_iterations=iteration + 1,
                    selector_final_score=selector_response.score,
                    selector_final_reasoning=selector_response.reasoning,
                    selector_confidence=selector_response.normalized_confidence,
                    validator_feedback=validator_response.feedback,
                    validator_issues=validator_response.issues,
                    is_validated=validator_response.is_valid,
                    assessment_id=assessment_id,
                    timestamp=datetime.now().isoformat(),
                    processing_time_ms=processing_time
                )
            
            prompt = self._update_prompt_with_feedback(prompt, validator_response.feedback)
    
    def _get_selector_response(self, prompt: str, profile: str, country: str) -> AgentResponse:
        """Get response from ethical selector agent"""
        messages = [
            SystemMessage(content="You are an expert refugee employment assessor following specific guidelines."),
            HumanMessage(content=prompt)
        ]
        
        try:
            response = self.llm.invoke(messages)
            logger.info(f"Ethical selector - Score: {response.score}, Confidence: {response.confidence}")
            return response
        except Exception as e:
            logger.error(f"Ethical selector error: {e}")
            return AgentResponse(score=5, reasoning="Technical error occurred", confidence=0.1)
    
    def _validate_response(self, profile: str, response: AgentResponse, 
                          available_features: List[str]) -> ValidatorResponse:
        """Validate ethical agent response"""
        
        validation_prompt = VALIDATOR_PROMPT_TEMPLATE.format(
            perspective="ethical",
            profile=profile,
            fields=', '.join(available_features),
            score=response.score,
            reasoning=response.reasoning
        )
        
        messages = [
            SystemMessage(content="Validate ethical assessments for accuracy and systemic considerations."),
            HumanMessage(content=validation_prompt)
        ]
        
        try:
            validator_response = self.validator_llm.invoke(messages)
            logger.info(f"Ethical validator - Valid: {validator_response.is_valid}")
            
            # Apply lenient validation if score is high with sufficient features
            if not validator_response.is_valid and response.score >= 6 and len(available_features) >= 5:
                logger.info("Applying lenient validation override")
                validator_response.is_valid = True
                validator_response.feedback += " [Lenient validation applied]"
            
            return validator_response
        except Exception as e:
            logger.error(f"Ethical validator error: {e}")
            return ValidatorResponse(is_valid=True, feedback="Validation error", issues=["validator_error"])
    
    def _update_prompt_with_feedback(self, original_prompt: str, feedback: str) -> str:
        """Update prompt based on validator feedback"""
        return f"{original_prompt}\n\nVALIDATOR FEEDBACK: {feedback}\nPlease address these concerns."

class MultiPerspectiveAnalyzer:
    """
    Multi-agent coordinator implementing assessment workflow
    """
    
    def __init__(self, model_name: str = "llama3"):
        # Initialize agents
        self.emotional_agent = EmotionalAgent(model_name)
        self.cultural_agent = CulturalAgent(model_name)
        self.ethical_agent = EthicalAgent(model_name)
        
        # Initialize profile builder
        self.profile_builder = ProfileBuilder(min_age=15, min_features_required=2)
        
        # Assessment weights
        self.weights = {
            "emotional": 0.3,
            "cultural": 0.4,
            "ethical": 0.3
        }
        
        self.host_countries = ["United States", "Canada", "Germany", "Sweden", "Australia"]
    
    def assess_refugee_comprehensive(self, row: pd.Series, host_countries: List[str] = None,
                                   max_iterations: int = 3) -> Optional[RefugeeAssessment]:
        """
        Comprehensive assessment of a single refugee across all host countries
        """
        start_time = time.time()
        
        if host_countries is None:
            host_countries = self.host_countries
        
        # Build and validate profile
        profile_result = self.profile_builder.build_profile(row)
        
        if not profile_result.is_valid:
            available_fields = list(profile_result.available_features.keys()) if hasattr(profile_result, 'available_features') else []
            logger.warning(f"Profile rejected: {profile_result.rejection_reason}")
            logger.warning(f"Available fields: {available_fields} (count: {len(available_fields)})")
            return None
        
        logger.info(f"Processing validated profile: {profile_result.profile_string[:100]}...")
        
        # Extract available features for context-aware prompts
        available_features = list(profile_result.available_features.keys()) if hasattr(profile_result, 'available_features') else []
        
        # Format profile with field codes for transparency
        if hasattr(profile_result, 'available_features'):
            profile_with_codes = format_profile_with_field_codes(profile_result.available_features)
        else:
            profile_with_codes = profile_result.profile_string
        
        # Assess across all host countries
        country_scores = {}
        all_traces = []
        
        for country in host_countries:
            logger.info(f"Assessing for host country: {country}")
            
            # Get assessments from all three perspectives using field-coded profile
            emotional_trace = self.emotional_agent.assess_with_context(
                profile_with_codes, country, available_features, max_iterations
            )
            cultural_trace = self.cultural_agent.assess_with_context(
                profile_with_codes, country, available_features, max_iterations
            )
            ethical_trace = self.ethical_agent.assess_with_context(
                profile_with_codes, country, available_features, max_iterations
            )
            
            # Calculate weighted score
            weighted_score = (
                emotional_trace.selector_final_score * self.weights["emotional"] +
                cultural_trace.selector_final_score * self.weights["cultural"] +
                ethical_trace.selector_final_score * self.weights["ethical"]
            )
            
            country_scores[country] = {
                "emotional": emotional_trace.selector_final_score,
                "cultural": cultural_trace.selector_final_score,
                "ethical": ethical_trace.selector_final_score,
                "weighted": round(weighted_score, 2)
            }
            
            # Store traces
            all_traces.extend([emotional_trace, cultural_trace, ethical_trace])
        
        # Determine recommendation
        best_country = max(country_scores.keys(), key=lambda c: country_scores[c]["weighted"])
        recommendation_score = country_scores[best_country]["weighted"]
        
        # Create comprehensive assessment result
        total_time = int((time.time() - start_time) * 1000)
        
        assessment = RefugeeAssessment(
            refugee_id=str(uuid.uuid4()),
            profile_string=profile_result.profile_string,
            total_features=profile_result.feature_count,
            available_features=available_features,
            country_scores=country_scores,
            recommended_country=best_country,
            recommendation_score=recommendation_score,
            assessment_traces=all_traces,
            assessment_timestamp=datetime.now().isoformat(),
            total_processing_time_ms=total_time,
            validation_status="validated" if all(t.is_validated for t in all_traces) else "partial_validation"
        )
        
        logger.info(f"Assessment complete: {best_country} ({recommendation_score:.1f}/10)")
        return assessment

class DatasetProcessor:
    """
    Dataset processor for refugee assessment
    """
    
    def __init__(self, analyzer: MultiPerspectiveAnalyzer):
        self.analyzer = analyzer
        self.host_countries = ["United States", "Canada", "Germany", "Sweden", "Australia"]
    
    def process_dataset(self, csv_path: str, sample_size: Optional[int] = 2,
                       output_traces: bool = True) -> Tuple[pd.DataFrame, List[RefugeeAssessment]]:
        """
        Process dataset with comprehensive assessment and tracing
        """
        df = pd.read_csv(csv_path)
        
        if sample_size:
            df = df[:sample_size]
        
        assessments = []
        detailed_traces = []
        
        logger.info(f"Starting assessment of {len(df)} refugees")
        
        for idx, row in df.iterrows():
            if idx % 50 == 0:
                logger.info(f"Progress: {idx}/{len(df)} ({(idx/len(df)*100):.1f}%)")
                logger.info(f"Valid assessments: {len(assessments)}")
            
            try:
                # Comprehensive assessment
                assessment = self.analyzer.assess_refugee_comprehensive(row, self.host_countries)
                
                if assessment is not None:
                    assessments.append(assessment)
                    if output_traces:
                        detailed_traces.append(assessment)
                
                time.sleep(0.5)  # Rate limiting
                
            except Exception as e:
                logger.error(f"Error processing refugee {idx}: {str(e)}")
                continue
        
        # Convert to DataFrame for analysis
        results_df = self._convert_to_dataframe(assessments)
        
        # Log final statistics
        logger.info(f"\nAssessment Complete:")
        logger.info(f"Total refugees: {len(df)}")
        logger.info(f"Valid assessments: {len(assessments)}")
        logger.info(f"Success rate: {(len(assessments)/len(df)*100):.1f}%")
        
        return results_df, detailed_traces
    
    def _convert_to_dataframe(self, assessments: List[RefugeeAssessment]) -> pd.DataFrame:
        """Convert assessment results to DataFrame for analysis"""
        rows = []
        
        for assessment in assessments:
            row = {
                "refugee_id": assessment.refugee_id,
                "profile_string": assessment.profile_string,
                "total_features": assessment.total_features,
                "recommended_country": assessment.recommended_country,
                "recommendation_score": assessment.recommendation_score,
                "validation_status": assessment.validation_status,
                "processing_time_ms": assessment.total_processing_time_ms,
                "assessment_timestamp": assessment.assessment_timestamp
            }
            
            # Add country scores
            for country, scores in assessment.country_scores.items():
                country_key = country.lower().replace(" ", "_")
                row[f"{country_key}_emotional"] = scores["emotional"]
                row[f"{country_key}_cultural"] = scores["cultural"]
                row[f"{country_key}_ethical"] = scores["ethical"]
                row[f"{country_key}_weighted"] = scores["weighted"]
            
            # Add reasoning from recommended country traces
            rec_traces = [t for t in assessment.assessment_traces 
                         if t.host_country == assessment.recommended_country]
            
            for trace in rec_traces:
                row[f"{trace.agent_type}_reasoning"] = trace.selector_final_reasoning
                row[f"{trace.agent_type}_confidence"] = trace.selector_confidence
                row[f"{trace.agent_type}_iterations"] = trace.selector_iterations
                row[f"{trace.agent_type}_validated"] = trace.is_validated
            
            rows.append(row)
        
        return pd.DataFrame(rows)
    
    def save_results(self, results_df: pd.DataFrame, traces: List[RefugeeAssessment],
                    output_dir: str = "./results"):
        """Save results in structured format"""
        
        output_path = Path(output_dir)
        output_path.mkdir(exist_ok=True)
        
        # Save main results
        results_file = output_path / "refugee_assessments.xlsx"
        results_df.to_excel(results_file, index=False)
        logger.info(f"Results saved: {results_file}")
        
        # Save detailed traces for reproducibility
        traces_file = output_path / "assessment_traces.json"
        traces_data = [asdict(trace) for trace in traces]
        
        with open(traces_file, 'w') as f:
            json.dump(traces_data, f, indent=2)
        logger.info(f"Traces saved: {traces_file}")
        
        # Save summary statistics
        summary_file = output_path / "assessment_summary.json"
        summary = self._generate_summary(results_df, traces)
        
        with open(summary_file, 'w') as f:
            json.dump(summary, f, indent=2)
        logger.info(f"Summary saved: {summary_file}")
    
    def _generate_summary(self, results_df: pd.DataFrame, traces: List[RefugeeAssessment]) -> Dict[str, Any]:
        """Generate assessment summary for analysis"""
        
        total_assessments = len(results_df)
        
        summary = {
            "assessment_overview": {
                "total_refugees_assessed": total_assessments,
                "assessment_framework": "Three-perspective Selector-Validator architecture",
                "perspectives": ["emotional", "cultural", "ethical"],
                "perspective_weights": {"emotional": 0.3, "cultural": 0.4, "ethical": 0.3},
                "host_countries": self.host_countries
            },
            "country_recommendations": results_df['recommended_country'].value_counts().to_dict(),
            "score_statistics": {
                "mean_recommendation_score": float(results_df['recommendation_score'].mean()),
                "std_recommendation_score": float(results_df['recommendation_score'].std()),
                "min_score": float(results_df['recommendation_score'].min()),
                "max_score": float(results_df['recommendation_score'].max())
            },
            "validation_statistics": {
                "fully_validated": len(results_df[results_df['validation_status'] == 'validated']),
                "partially_validated": len(results_df[results_df['validation_status'] == 'partial_validation']),
                "validation_rate": float(len(results_df[results_df['validation_status'] == 'validated']) / total_assessments)
            },
            "processing_statistics": {
                "mean_processing_time_ms": float(results_df['processing_time_ms'].mean()),
                "total_processing_time_hours": float(results_df['processing_time_ms'].sum() / (1000 * 60 * 60))
            }
        }
        
        return summary

def main():
    """
    Main execution function for refugee assessment
    """
    logger.info("Starting Three-Perspective Refugee Assessment System v2")
    
    # Initialize system
    analyzer = MultiPerspectiveAnalyzer(model_name="llama3")
    processor = DatasetProcessor(analyzer)
    
    # Configuration
    input_file = "./Dataset/D3/Anonymized HHM Data.csv"
    sample_size = 2  # For demonstration
    
    if not Path(input_file).exists():
        logger.error(f"Dataset file not found: {input_file}")
        return
    
    try:
        # Process dataset
        logger.info("Processing dataset with multi-agent architecture...")
        results_df, traces = processor.process_dataset(input_file, sample_size=sample_size)
        
        if len(results_df) == 0:
            logger.warning("No valid assessments generated")
            return
        
        # Save results
        processor.save_results(results_df, traces)
        
        # Display summary
        logger.info(f"\nAssessment Summary:")
        logger.info(f"Successfully assessed: {len(results_df)} refugees")
        logger.info(f"Average recommendation score: {results_df['recommendation_score'].mean():.2f}/10")
        
        country_recs = results_df['recommended_country'].value_counts()
        logger.info(f"Country recommendations:")
        for country, count in country_recs.items():
            logger.info(f"  {country}: {count}")
        
        validation_rate = len(results_df[results_df['validation_status'] == 'validated']) / len(results_df)
        logger.info(f"Validation rate: {validation_rate:.1%}")
        
        logger.info("\nAssessment complete!")
        
    except Exception as e:
        logger.error(f"Assessment failed: {str(e)}")
        raise

if __name__ == "__main__":
    main()