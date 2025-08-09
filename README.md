# EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration

A multi-agent AI framework for refugee integration assessment, submitted to NeurIPS 2025 Creative AI Track.

## Overview

EMPATHIA (Enriched Multimodal Pathways for Agentic Thinking in Humanitarian Immigrant Assistance) addresses refugee integration through a novel multi-agent deliberation system. The framework employs three specialized agents (Cultural, Emotional, Ethical) that collaborate transparently to produce interpretable placement recommendations.

## Features

- **Multi-Agent Architecture**: Three specialized agents with weighted deliberation (Cultural 40%, Emotional 30%, Ethical 30%)
- **Transparent Reasoning**: Interpretable assessments with detailed explanations
- **Selector-Validator Design**: Ensures recommendation consistency
- **Validated Performance**: 87.4% convergence rate on 6,359 refugee profiles from UN Kakuma dataset

## Demo

Open `webpage/index.html` in a modern web browser to interact with the SEED module assessment system.

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

## Structure

```
empathia/
├── webpage/                    # Web application
│   ├── index.html             # Main interface
│   ├── script.js              # Assessment logic
│   ├── styles.css             # Styling
│   ├── figures/               # Architecture diagrams
│   │   ├── EMPATHIA_framework.png
│   │   └── SEED.png
│   └── *.png                  # UI icons
├── code/                       # Python implementation
│   ├── assessment_prompts.py
│   ├── profile_builder.py
│   └── refugee_assessment_system.py
├── requirements.txt            # Python dependencies
├── LICENSE                     # MIT License
└── README.md                   # Documentation
```

## Authors

- [Mohamed Rayan Barhdadi](https://bmrayan.com) - Texas A&M University
- [Mehmet Tuncel](https://web.itu.edu.tr/tuncelm/) - Istanbul Technical University
- [Erchin Serpedin](https://engineering.tamu.edu/electrical/profiles/eserpedin.html) - Texas A&M University
- [Hasan Kurban](https://hasankurban.com) - Hamad Bin Khalifa University

## Citation

```bibtex
@inproceedings{barhdadi2025empathia,
  title={EMPATHIA: Multi-Faceted Human-AI Collaboration for Refugee Integration},
  author={Barhdadi, Mohamed Rayan and Tuncel, Mehmet and Serpedin, Erchin and Kurban, Hasan},
  booktitle={NeurIPS 2025 Creative AI Track},
  year={2025}
}
```

## License

MIT License - see [LICENSE](LICENSE) file for details.