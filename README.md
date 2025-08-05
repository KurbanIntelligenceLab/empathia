# EMPATHIA

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Paper](https://img.shields.io/badge/paper-NeurIPS%202025%20Creative%20AI%20Track:%20Humanity%20(Submitted)-purple.svg)](EMPATHIA_Paper.pdf)

**Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance**

A multi-agent artificial intelligence framework designed for evidence-based refugee assessment and integration through systematic evaluation across emotional, cultural, and ethical dimensions.

## Abstract

Current AI approaches to refugee integration optimize narrow objectives such as employment and fail to capture the cultural, emotional, and ethical dimensions critical for long-term success. We introduce **EMPATHIA** (Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance), a multi-agent framework designed to preserve human dignity in high-stakes humanitarian decision-making. Grounded in Kegan's Constructive Developmental Theory, EMPATHIA decomposes integration into three modules: **SEED** (Socio-cultural Entry and Embedding Decision) for initial placement, **RISE** (Rapid Integration and Self-sufficiency Engine) for early independence, and **THRIVE** (Transcultural Harmony and Resilience through Integrated Values and Engagement) for sustained outcomes. SEED employs a selector–validator architecture with three specialized agents—emotional, cultural, and ethical—that deliberate transparently to produce interpretable recommendations. Experiments on the UN Kakuma dataset (15,000+ individuals) and implementation on 534 refugee profiles with 150+ socioeconomic variables achieved 89.3% validation convergence and explainable assessments across five host countries. EMPATHIA's weighted integration of cultural, emotional, and ethical factors balances competing value systems while supporting practitioner–AI collaboration. By augmenting rather than replacing human expertise, EMPATHIA provides a generalizable framework for AI-driven allocation tasks where multiple values must be reconciled.

## System Architecture

The EMPATHIA framework consists of three developmental modules:

### SEED Module (Socio-cultural Entry and Embedding Decision)
- Initial placement assessment (0-6 months)
- Multi-perspective evaluation across emotional, cultural, and ethical dimensions
- Selector-validator architecture ensuring assessment quality
- Weighted scoring: Cultural (40%), Emotional (30%), Ethical (30%)

### RISE Module (Rapid Integration and Self-sufficiency Engine)
- Early-stage development support (6-24 months)
- Focus on vocational mapping and language acquisition
- Adaptive learning pathways based on individual progress

### THRIVE Module (Transcultural Harmony and Resilience)
- Long-term integration support (24+ months)
- Bicultural fluency development
- Leadership and community contribution opportunities

## Technical Implementation

### Multi-Agent Architecture
- **Emotional Agent**: Evaluates psychological resilience, adaptation capacity, and support requirements
- **Cultural Agent**: Assesses linguistic capabilities, cultural compatibility, and integration potential
- **Ethical Agent**: Analyzes legal status, vulnerability factors, and accommodation needs

### Selector-Validator Mechanism
```
1. Initial assessment by specialized agents
2. Validation iteration with consistency checks
3. Convergence criteria evaluation
4. Final recommendation synthesis
```

### Key Features
- Processes 19+ refugee profile attributes including demographics, education, work history, and functional capabilities
- Iterative refinement through agent consensus mechanisms
- Transparent reasoning with traceable decision paths
- Scalable architecture supporting batch processing

## Performance Metrics

Based on evaluation of 1,122 refugee profiles from the UNHCR Kakuma dataset:

| Metric | Value |
|--------|-------|
| Validation Convergence | 89.3% |
| Average Processing Time | 2.3 minutes |
| Emotional Agent Agreement | 87.2% |
| Cultural Agent Agreement | 92.1% |
| Ethical Agent Agreement | 88.7% |

### Host Country Distribution
- Canada: 28.4%
- Germany: 24.1%
- Sweden: 21.7%
- USA: 14.3%
- Australia: 11.5%

## Installation

```bash
git clone https://github.com/KurbanIntelligenceLab/empathia.git
cd empathia
pip install -r requirements.txt
```

## Usage

```python
from empathia import SEEDAssessor

# Initialize multi-agent assessor
assessor = SEEDAssessor(
    weights={'emotional': 0.3, 'cultural': 0.4, 'ethical': 0.3}
)

# Load refugee profile data
profile = load_profile("refugee_data.csv")

# Perform multi-perspective assessment
recommendation = assessor.assess(profile)

# Access results
print(f"Recommended country: {recommendation.country}")
print(f"Weighted score: {recommendation.score}/10")
print(f"Confidence: {recommendation.confidence}")
```

## Data Requirements

The system processes standardized refugee profiles containing:
- Demographic information (age, gender, country of origin)
- Educational background and professional experience
- Language proficiencies
- Documentation status
- Functional capabilities assessment
- Household composition and dependency ratios

## Dataset

The evaluation was conducted on the United Nations High Commissioner for Refugees (UNHCR) dataset comprising detailed profiles of 15,000+ individuals from diverse demographic backgrounds. For access to the dataset, please request it directly [here](https://microdata.unhcr.org/index.php/catalog/302?utm_source). Please request it in the UNHCR library.

## Research Context

This work contributes to the intersection of artificial intelligence and humanitarian applications by:
1. Implementing transparent multi-agent deliberation for high-stakes decisions
2. Preserving human agency while enabling systematic assessment at scale
3. Providing empirically-validated framework for value-sensitive AI deployment

## Citation

```bibtex
@article{barhdadi2025empathia,
  title={EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration},
  author={Barhdadi, Mohamed Rayan and Tuncel, Mehmet and Kurban, Hasan},
  journal={arXiv preprint},
  year={2025}
}
```

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) file for details.

## Contact

**Principal Investigators:**
- Mohamed Rayan Barhdadi - Texas A&M University at Qatar (rayan.barhdadi@tamu.edu)
- Mehmet Tuncel - Istanbul Technical University (tuncelm@itu.edu.tr)
- Hasan Kurban - Hamad Bin Khalifa University (hkurban@hbku.edu.qa)

## Acknowledgments

We thank the United Nations High Commissioner for Refugees (UNHCR) for providing access to the anonymized refugee data that made this research possible.

## Repository Structure

```
empathia/
├── empathia/          # Core framework implementation
├── docs/              # Technical documentation
├── examples/          # Usage examples and tutorials
├── tests/             # Unit and integration tests
├── results/           # Evaluation results and analysis
└── webpage/           # Interactive demonstration interface
```

## Future Directions

Current development focuses on:
- Extended evaluation on diverse refugee populations
- Integration with existing humanitarian information systems
- Real-time adaptation based on placement outcomes
- Expansion to additional host countries and contexts

For detailed technical documentation, see [docs/technical_overview.md](docs/technical_overview.md)