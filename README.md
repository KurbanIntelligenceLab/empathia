# EMPATHIA

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Paper](https://img.shields.io/badge/paper-NeurIPS%202025-purple.svg)](https://neurips.cc/)

**Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance**

A multi-agent artificial intelligence framework designed for evidence-based refugee assessment and integration through systematic evaluation across emotional, cultural, and ethical dimensions.

## Abstract

EMPATHIA addresses the complex challenge of refugee integration by implementing a multi-agent system that evaluates candidates across three critical perspectives. The framework employs a selector-validator architecture to ensure robust, transparent, and evidence-based recommendations while maintaining human oversight in humanitarian decision-making processes. Our approach is grounded in Kegan's Constructive Developmental Theory, providing a theoretically-informed basis for modeling human development trajectories in displacement contexts.

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

## Research Context

This work contributes to the intersection of artificial intelligence and humanitarian applications by:
1. Implementing transparent multi-agent deliberation for high-stakes decisions
2. Preserving human agency while enabling systematic assessment at scale
3. Providing empirically-validated framework for value-sensitive AI deployment

## Citation

```bibtex
@inproceedings{barhdadi2025empathia,
  title={EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration},
  author={Barhdadi, Mohamed Rayan and Tuncel, Mehmet and Kurban, Hasan},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS) - Creative AI Track},
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

This research was supported by the Qatar National Research Fund and conducted in collaboration with UNHCR regional offices. We acknowledge the Kakuma refugee camp administration for data access and the humanitarian practitioners who provided domain expertise.

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