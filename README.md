# EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration

**[Mohamed Rayan Barhdadi](https://bmrayan.com)¹, [Mehmet Tuncel](https://web.itu.edu.tr/tuncelm/)², [Erchin Serpedin](https://engineering.tamu.edu/electrical/profiles/eserpedin.html)¹, [Hasan Kurban](https://hasankurban.com)³**

¹Texas A&M University  
²Istanbul Technical University  
³Hamad Bin Khalifa University

**Corresponding Author:** Dr. Hasan Kurban (hkurban@hbku.edu.qa)  
**For Code & Data Inquiries:** Mohamed Rayan Barhdadi (rayan.barhdadi@tamu.edu)

**Submitted to NeurIPS 2025 Creative AI Track: Humanity**  
**arXiv:** [arXiv:2508.07671](https://arxiv.org/abs/2508.07671) | **Demo:** [Interactive Web Application](https://kurbanintelligencelab.github.io/empathia/)

## TL;DR - Abstract

We introduce EMPATHIA (Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance), a multi-agent framework addressing the central Creative AI question: how do we preserve human dignity when machines participate in life-altering decisions? Our system employs three specialized agents—emotional, cultural, and ethical—that deliberate transparently through a selector-validator architecture to produce interpretable refugee placement recommendations. Experiments on 6,359 working-age refugees from the UN Kakuma dataset achieved 87.4% validation convergence with explainable assessments across five host countries.

![EMPATHIA Framework](webpage/figures/EMPATHIA_framework.png)
*Figure 1: EMPATHIA's Human-AI Collaborative Framework demonstrating how artificial intelligence amplifies rather than replaces human wisdom through three developmental phases.*

## Key Features

- **Multi-Agent Architecture**: Three specialized agents with weighted deliberation (Cultural, Emotional, and Ethical agents)
- **Transparent Reasoning**: Interpretable assessments with detailed explanations for each perspective
- **Selector-Validator Design**: Ensures recommendation consistency and quality through iterative refinement
- **Validated Performance**: 87.4% convergence rate on 6,359 refugee profiles from UN Kakuma dataset
- **Interactive Demo**: Web-based interface for exploring the SEED module assessment system

## Results Summary

### Multi-Agent Deliberation Quality by Reasoning Complexity

| **Reasoning Complexity & Decision Analysis** | | | | | | | **Validation Mechanism & Quality Metrics** | | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Category** | **N** | **Conv** | **Iter** | **Coh** | **Agr** | **Depth** | **Category** | **N** | **Conv** | **Iter** | **Coh** | **Agr** | **Depth** |
| *Profile Complexity* | | | | | | | *Validator Feedback* | | | | | | |
| Low (<5) | 892 | 93.7 | 1.12 | .94 | 91.3 | 3.2±.8 | No Issues | 4087 | 100 | 1.00 | .94 | 91.8 | 4.2±.9 |
| Medium (5-10) | 2647 | 89.8 | 1.21 | .91 | 87.2 | 4.1±.9 | Minor Refine | 783 | 67.3 | 2.00 | .86 | 82.4 | 4.3±.9 |
| High (11-15) | 1283 | 86.4 | 1.34 | .88 | 83.6 | 4.8±1.1 | Major Revise | 247 | 48.2 | 3.21 | .78 | 74.6 | 4.5±1.0 |
| Very High (>15) | 295 | 81.2 | 1.67 | .84 | 78.9 | 5.6±1.3 | | | | | | | |
| *Decision Difficulty* | | | | | | | *Reasoning Depth (levels)* | | | | | | |
| Unanimous | 1847 | 96.3 | 1.08 | .96 | 94.7 | 3.8±.7 | Surface (1-2) | 412 | 82.3 | 1.43 | .83 | 80.7 | 2.0±.3 |
| Strong Consensus | 2103 | 89.2 | 1.19 | .91 | 86.8 | 4.2±.9 | Moderate (3-4) | 3126 | 89.7 | 1.22 | .91 | 87.2 | 3.5±.4 |
| Mod. Divergence | 983 | 83.7 | 1.42 | .86 | 81.2 | 4.6±1.0 | Deep (5-6) | 1394 | 91.2 | 1.19 | .93 | 88.9 | 5.5±.5 |
| High Divergence | 184 | 72.4 | 1.89 | .79 | 73.4 | 5.1±1.2 | Very Deep (7+) | 185 | 93.6 | 1.24 | .95 | 91.3 | 7.8±.9 |

**Legend:** Conv = Convergence (%), Iter = Avg Iterations, Coh = Coherence (0-1), Agr = Agent Agreement (%), Depth = Reasoning Depth (levels±SD)  
*For complete metric definitions and detailed analysis, see the Supplementary Materials in the paper.*

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

# Install Python dependencies
pip install -r requirements.txt

# For web demo (no installation required)
cd webpage
python -m http.server 8000
# Visit http://localhost:8000
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
│   └── figures/               # Framework diagrams
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
@article{barhdadi2025empathia,
  title  = {EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration},
  author = {Barhdadi, Mohamed Rayan and Tuncel, Mehmet and Serpedin, Erchin and Kurban, Hasan},
  journal = {arXiv preprint arXiv:2508.07671},
  year   = {2025},
  url    = {https://arxiv.org/abs/2508.07671}
}
```

## Acknowledgments

We thank the UNHCR for data access and the refugee communities whose experiences inform this work.

## Contact

For questions, collaboration, or feedback:

**Corresponding Author:** Dr. Hasan Kurban (hkurban@hbku.edu.qa)  
**For Code & Data Inquiries:** Mohamed Rayan Barhdadi (rayan.barhdadi@tamu.edu)

**Repository:** https://github.com/KurbanIntelligenceLab/empathia

## License

MIT License - see [LICENSE](LICENSE) file for details.