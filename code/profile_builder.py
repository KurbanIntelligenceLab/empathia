"""
Profile Builder for Refugee Assessment System

This module provides profile validation and building functionality that ensures
data integrity and prevents hallucination of missing information.
"""

import pandas as pd
from typing import List, Dict, Any, Optional
from dataclasses import dataclass
import logging

logger = logging.getLogger(__name__)

@dataclass
class ProfileResult:
    """Result of profile building process"""
    is_valid: bool
    profile_string: str
    rejection_reason: str
    feature_count: int
    available_features: Dict[str, Any]

class ProfileBuilder:
    """
    Profile builder that only uses available data and prevents hallucination
    """
    
    def __init__(self, min_age: int = 15, min_features_required: int = 3):
        self.min_age = min_age
        self.min_features_required = min_features_required
        
        # Core features that must be present
        self.core_features = ['age', 'gender', 'country_of_origin']
        
        # Feature mappings for different column names
        self.feature_mappings = {
            'age': ['age', 's2q15'],
            'gender': ['gender', 's2q14'],
            'country_of_origin': ['country_of_origin', 's2q16'],
            'household_size': ['hhsize', 'household_size'],
            'household_head': ['head', 'household_head'],
            'education_level': ['s4q7', 'education_level'],
            'employed_last_7_days': ['empl_active_7d', 'employed_last_7_days'],
            'work_status': ['work_status'],
            'type_of_work': ['s5q24', 'type_of_work'],
            'work_before_displacement': ['s5q64', 'work_before_displacement'],
            'has_disability': ['disabled', 'has_disability'],
            'vision_difficulty': ['s9q4', 'vision_difficulty'],
            'hearing_difficulty': ['s9q5', 'hearing_difficulty'],
            'mobility_difficulty': ['s9q6', 'mobility_difficulty'],
            'cognitive_difficulty': ['s9q7', 'cognitive_difficulty'],
            'has_refugee_id': ['s9q2_3', 'has_refugee_id'],
            'has_work_permit': ['s9q2_6', 'has_work_permit'],
            'speaks_english': ['s4q11_1', 'speaks_english'],
            'reads_english': ['s4q12_1', 'reads_english'],
            'speaks_swahili': ['s4q11_2', 'speaks_swahili'],
            'reads_swahili': ['s4q12_2', 'reads_swahili'],
            'speaks_arabic': ['s4q11_5', 'speaks_arabic'],
            'computer_skills': ['s5q66', 'computer_skills'],
            'internet_skills': ['s5q65', 'internet_skills'],
            'depend_ratio': ['depend_ratio']
        }
    
    def build_profile(self, row: pd.Series) -> ProfileResult:
        """
        Build and validate a refugee profile from available data only
        
        Args:
            row: Pandas Series containing refugee data
            
        Returns:
            ProfileResult with validation status and profile information
        """
        # Extract available features
        available_features = self._extract_available_features(row)
        
        # Validate core requirements
        validation_result = self._validate_profile(available_features)
        if not validation_result[0]:
            return ProfileResult(
                is_valid=False,
                profile_string="",
                rejection_reason=validation_result[1],
                feature_count=len(available_features),
                available_features=available_features
            )
        
        # Build profile string from validated data
        profile_string = self._build_profile_string(available_features)
        
        return ProfileResult(
            is_valid=True,
            profile_string=profile_string,
            rejection_reason="",
            feature_count=len(available_features),
            available_features=available_features
        )
    
    def _extract_available_features(self, row: pd.Series) -> Dict[str, Any]:
        """Extract only available features from the row"""
        available_features = {}
        
        for standard_name, possible_columns in self.feature_mappings.items():
            for col_name in possible_columns:
                if col_name in row.index and pd.notna(row[col_name]):
                    # Store the actual value found
                    available_features[standard_name] = row[col_name]
                    break  # Use first available mapping
        
        return available_features
    
    def _validate_profile(self, available_features: Dict[str, Any]) -> tuple[bool, str]:
        """
        Validate that profile meets minimum requirements
        
        Returns:
            Tuple of (is_valid, rejection_reason)
        """
        # Check for core features
        missing_core = [f for f in self.core_features if f not in available_features]
        if missing_core:
            return False, f"Missing core features: {', '.join(missing_core)}"
        
        # Validate age
        age = available_features.get('age')
        if age is not None:
            try:
                age_val = float(age)
                if age_val < self.min_age:
                    return False, f"Age ({age_val}) below minimum ({self.min_age})"
            except (ValueError, TypeError):
                return False, f"Invalid age value: {age}"
        
        # Check minimum feature count
        if len(available_features) < self.min_features_required:
            return False, f"Insufficient features: {len(available_features)} < {self.min_features_required}"
        
        return True, ""
    
    def _build_profile_string(self, available_features: Dict[str, Any]) -> str:
        """Build profile string from available features only"""
        profile_parts = []
        
        # Format each available feature
        for feature_name, value in available_features.items():
            # Clean and format the feature name
            display_name = feature_name.replace('_', ' ').title()
            profile_parts.append(f"{display_name}: {value}")
        
        return "; ".join(profile_parts)

def build_profile(row: pd.Series, min_age: int = 15, min_features_required: int = 3) -> str:
    """
    Convenience function for building profiles
    
    Args:
        row: Pandas Series containing refugee data
        min_age: Minimum age requirement
        min_features_required: Minimum number of features required
        
    Returns:
        Profile string or empty string if invalid
    """
    builder = ProfileBuilder(min_age=min_age, min_features_required=min_features_required)
    result = builder.build_profile(row)
    
    if result.is_valid:
        return result.profile_string
    else:
        logger.info(f"Profile rejected: {result.rejection_reason}")
        return ""

# Legacy compatibility
def robust_build_profile(row: pd.Series) -> str:
    """Legacy function name for backward compatibility"""
    return build_profile(row)

if __name__ == "__main__":
    # Example usage
    import pandas as pd
    
    # Sample data
    sample_data = pd.Series({
        's2q15': 28,  # age
        's2q14': 'Female',  # gender
        's2q16': 'Somalia',  # country of origin
        'hhsize': 5,  # household size
        's4q7': 'Primary completed',  # education
        'disabled': 'No'  # disability status
    })
    
    builder = ProfileBuilder()
    result = builder.build_profile(sample_data)
    
    print(f"Valid: {result.is_valid}")
    print(f"Profile: {result.profile_string}")
    print(f"Features: {result.feature_count}")