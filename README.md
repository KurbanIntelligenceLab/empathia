# EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration

**[Mohamed Rayan Barhdadi](https://bmrayan.com)¹, [Mehmet Tuncel](https://web.itu.edu.tr/tuncelm/)², [Erchin Serpedin](https://engineering.tamu.edu/electrical/profiles/eserpedin.html)¹, [Hasan Kurban](https://hasankurban.com)³**

¹Texas A&M University  
²Istanbul Technical University  
³Hamad Bin Khalifa University

*Corresponding author: hkurban@hbku.edu.qa*

**Submitted to NeurIPS 2025 Creative AI Track: Humanity**  
**Paper:** [EMPATHIA_Paper.pdf](../EMPATHIA_Paper.pdf) | **Demo:** [Interactive Web Application](webpage/index.html)

## TL;DR - Abstract

We introduce EMPATHIA (Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance), a multi-agent framework addressing the central Creative AI question: how do we preserve human dignity when machines participate in life-altering decisions? Our system employs three specialized agents—emotional, cultural, and ethical—that deliberate transparently through a selector-validator architecture to produce interpretable refugee placement recommendations. Experiments on 6,359 working-age refugees from the UN Kakuma dataset achieved 87.4% validation convergence with explainable assessments across five host countries.

![EMPATHIA Framework](webpage/figures/EMPATHIA_framework.png)
*Figure 1: EMPATHIA's Human-AI Collaborative Framework demonstrating how artificial intelligence amplifies rather than replaces human wisdom through three developmental phases.*

## Key Features

- **Multi-Agent Architecture**: Three specialized agents with weighted deliberation (Cultural 40%, Emotional 30%, Ethical 30%)
- **Transparent Reasoning**: Interpretable assessments with detailed explanations for each perspective
- **Selector-Validator Design**: Ensures recommendation consistency and quality through iterative refinement
- **Validated Performance**: 87.4% convergence rate on 6,359 refugee profiles from UN Kakuma dataset
- **Interactive Demo**: Web-based interface for exploring the SEED module assessment system

## Results Summary

### Multi-Agent Deliberation Quality

| Profile Complexity | N    | Convergence | Iterations | Coherence | Agreement | Dependency |
|-------------------|------|-------------|------------|-----------|-----------|------------|
| Low (<5 features) | 892  | 93.7%       | 1.12       | 0.94      | 91.3%     | 3.2        |
| Medium (5-10)     | 2647 | 89.8%       | 1.21       | 0.91      | 87.2%     | 4.1        |
| High (11-15)      | 1283 | 86.4%       | 1.34       | 0.88      | 83.6%     | 4.8        |
| Very High (>15)   | 295  | 81.2%       | 1.67       | 0.84      | 78.9%     | 5.6        |

### Perspective-Specific Performance

| Perspective | Weight | Mean Score | Std Dev | Alignment |
|-------------|--------|------------|---------|-----------|
| Cultural    | 40%    | 7.2        | 1.3     | 0.89      |
| Emotional   | 30%    | 6.8        | 1.5     | 0.86      |
| Ethical     | 30%    | 7.0        | 1.2     | 0.88      |

## Method Overview

### Three-Module Framework

1. **SEED** (Socio-cultural Entry and Embedding Decision): Initial placement assessment
2. **RISE** (Rapid Integration and Self-sufficiency Engine): Early independence support
3. **THRIVE** (Transcultural Harmony and Resilience): Long-term integration outcomes

### Agent Architecture

Each specialized agent evaluates refugee profiles through its unique lens:
- **Cultural Agent**: Assesses language skills, education, and cultural adaptability
- **Emotional Agent**: Evaluates psychological readiness, resilience, and motivation
- **Ethical Agent**: Considers fairness, rights, and systemic barriers

### Validation Process

The selector-validator architecture ensures consistency through:
- Initial assessment generation by three agents
- Weighted score combination (Cultural 40%, Emotional 30%, Ethical 30%)
- Validator review for data grounding and coherence
- Iterative refinement until convergence

## Installation

```bash
# Clone repository
git clone https://github.com/KurbanIntelligenceLab/empathia.git
cd empathia

# For web demo
cd webpage
python -m http.server 8000
# Visit http://localhost:8000

# For Python implementation (optional)
pip install -r requirements.txt
```

## Quick Start

### Web Interface

Open `webpage/index.html` in a modern browser to:
1. Select from 8 demonstration refugee profiles
2. Run SEED assessment to see multi-agent reasoning
3. View detailed explanations from each perspective
4. See weighted recommendation and country placement

### Python Implementation

```python
# Initialize assessment system
from code.refugee_assessment_system import RefugeeAssessmentSystem

system = RefugeeAssessmentSystem()

# Load refugee profile
profile = system.load_profile("REF-0001")

# Run multi-agent assessment
results = system.assess(profile)

# Display recommendations
print(f"Recommended Country: {results.country}")
print(f"Overall Score: {results.score}/10")
```

## System Architecture

```
empathia/
├── webpage/                    # Interactive web application
│   ├── index.html             # Main interface
│   ├── script.js              # Assessment logic (8 demo profiles)
│   ├── styles.css             # Professional styling
│   ├── figures/               # Framework diagrams
│   │   ├── EMPATHIA_framework.png
│   │   └── SEED.png
│   └── *.png                  # UI icons
├── code/                       # Python implementation
│   ├── assessment_prompts.py  # Agent prompt templates
│   ├── profile_builder.py     # Profile processing
│   └── refugee_assessment_system.py  # Core system
├── requirements.txt            # Python dependencies
├── LICENSE                     # MIT License
└── README.md                   # Documentation
```

## Key Findings

1. **Convergence Patterns**: Higher profile complexity requires more iterations but maintains >80% convergence
2. **Agent Agreement**: Cultural and ethical perspectives show highest alignment (0.89 and 0.88)
3. **Validation Impact**: Validator feedback improves coherence by 12% on average
4. **Scalability**: System handles diverse profiles from 11 countries with consistent performance

## Dataset

The evaluation uses the UN Kakuma refugee camp dataset:
- **Total Population**: 15,026 individuals
- **Working-Age Adults**: 7,960 (15+ per ILO/UNHCR standards)
- **Analysis Subset**: 6,359 profiles with 150+ socioeconomic variables
- **Origin Countries**: 11 nations including South Sudan, Somalia, DR Congo

**Note**: Demo uses synthetic profiles for privacy. For actual UN data access, contact UNHCR directly.

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{barhdadi2025empathia,
  title     = {EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration},
  author    = {Barhdadi, Mohamed Rayan and Tuncel, Mehmet and Serpedin, Erchin and Kurban, Hasan},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS), Creative AI Track},
  year      = {2025},
  note      = {Interactive demo: \url{https://empathia-demo.github.io}}
}
```

## Acknowledgments

We thank the UNHCR for data access, the refugee communities whose experiences inform this work, and the NeurIPS reviewers for their valuable feedback. This research was supported by grants from Texas A&M University and Hamad Bin Khalifa University.

## Contact

For questions, collaboration, or feedback:
- **Primary Contact**: Mohamed Rayan Barhdadi (mohamed.barhdadi@tamu.edu)
- **Project Lead**: Dr. Hasan Kurban (hkurban@hbku.edu.qa)
- **Repository**: https://github.com/KurbanIntelligenceLab/empathia

## License

MIT License - see [LICENSE](LICENSE) file for details.
