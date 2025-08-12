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
*Figure 1: EMPATHIA's Human–AI Collaborative Framework illustrating how AI amplifies rather than replaces human wisdom through three phases: SEED (initial placement honoring individual narratives), RISE (identity building via meaningful participation), and THRIVE (transcultural harmony enriching both refugee and host communities).*

## Key Features

- **Multi-Agent Architecture**: Three specialized agents with weighted deliberation (Cultural, Emotional, and Ethical agents)
- **Transparent Reasoning**: Interpretable assessments with detailed explanations for each perspective
- **Selector-Validator Design**: Ensures recommendation consistency and quality through iterative refinement
- **Validated Performance**: 87.4% convergence rate on 6,359 refugee profiles from UN Kakuma dataset
- **Interactive Demo**: Web-based interface for exploring the SEED module assessment system

## Results Summary

**Table: Multi-Agent Deliberation Quality by Reasoning Complexity**

<table>
<tr>
<th colspan="7"><b>Reasoning Complexity & Decision Analysis</b></th>
<th colspan="7"><b>Validation Mechanism & Quality Metrics</b></th>
</tr>
<tr>
<th>Category</th><th>N</th><th>Conv</th><th>Iter</th><th>Coh</th><th>Agr</th><th>Depth</th>
<th>Category</th><th>N</th><th>Conv</th><th>Iter</th><th>Coh</th><th>Agr</th><th>Depth</th>
</tr>
<tr>
<td colspan="7"><i>Profile Complexity</i></td>
<td colspan="7"><i>Validator Feedback</i></td>
</tr>
<tr>
<td>Low (<5)</td><td>892</td><td><u>93.7</u></td><td><b>1.12</b></td><td><u>.94</u></td><td><u>91.3</u></td><td>3.2±.8</td>
<td>No Issues</td><td>4087</td><td><b>100</b></td><td><b>1.00</b></td><td><u>.94</u></td><td><u>91.8</u></td><td>4.2±.9</td>
</tr>
<tr>
<td>Medium (5-10)</td><td>2647</td><td>89.8</td><td>1.21</td><td>.91</td><td>87.2</td><td>4.1±.9</td>
<td>Minor Refine</td><td>783</td><td>67.3</td><td>2.00</td><td>.86</td><td>82.4</td><td>4.3±.9</td>
</tr>
<tr>
<td>High (11-15)</td><td>1283</td><td>86.4</td><td>1.34</td><td>.88</td><td>83.6</td><td>4.8±1.1</td>
<td>Major Revise</td><td>247</td><td>48.2</td><td>3.21</td><td>.78</td><td>74.6</td><td>4.5±1.0</td>
</tr>
<tr>
<td>Very High (>15)</td><td>295</td><td>81.2</td><td>1.67</td><td>.84</td><td>78.9</td><td><u>5.6±1.3</u></td>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td colspan="7"><i>Decision Difficulty</i></td>
<td colspan="7"><i>Reasoning Depth (levels)</i></td>
</tr>
<tr>
<td>Unanimous</td><td>1847</td><td><b>96.3</b></td><td><u>1.08</u></td><td><b>.96</b></td><td><b>94.7</b></td><td>3.8±.7</td>
<td>Surface (1-2)</td><td>412</td><td>82.3</td><td>1.43</td><td>.83</td><td>80.7</td><td><b>2.0±.3</b></td>
</tr>
<tr>
<td>Strong Consensus</td><td>2103</td><td>89.2</td><td>1.19</td><td>.91</td><td>86.8</td><td>4.2±.9</td>
<td>Moderate (3-4)</td><td>3126</td><td>89.7</td><td>1.22</td><td>.91</td><td>87.2</td><td>3.5±.4</td>
</tr>
<tr>
<td>Mod. Divergence</td><td>983</td><td>83.7</td><td>1.42</td><td>.86</td><td>81.2</td><td>4.6±1.0</td>
<td>Deep (5-6)</td><td>1394</td><td>91.2</td><td><u>1.19</u></td><td>.93</td><td>88.9</td><td>5.5±.5</td>
</tr>
<tr>
<td>High Divergence</td><td>184</td><td>72.4</td><td>1.89</td><td>.79</td><td>73.4</td><td><b>5.1±1.2</b></td>
<td>Very Deep (7+)</td><td>185</td><td><u>93.6</u></td><td>1.24</td><td><b>.95</b></td><td><b>91.3</b></td><td><b>7.8±.9</b></td>
</tr>
</table>

**Legend:** Conv = Convergence (%), Iter = Avg Iterations, Coh = Coherence (0-1), Agr = Agent Agreement (%), Depth = Reasoning Depth (levels±SD)  
**Bold** = highest, <u>underline</u> = second highest per column. All p<0.001, bootstrap n=1000, N=6,359.  
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