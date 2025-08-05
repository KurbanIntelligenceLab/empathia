// EMPATHIA Assessment Demo

// Global variable to store sample cases
let sampleCases = null;

// Load sample cases on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load sample cases
    fetch('sample_cases.json')
        .then(response => response.json())
        .then(data => {
            sampleCases = data;
            console.log(`Loaded ${data.total_cases} sample cases`);
            updateProfileOptions();
        })
        .catch(error => {
            console.error('Error loading sample cases:', error);
        });
    
    // Setup disabled button handlers
    setupDisabledButtons();
});

// Update profile options based on available cases
function updateProfileOptions() {
    if (!sampleCases) return;
    
    // Get unique values from cases
    const ages = [...new Set(sampleCases.cases.map(c => c.age_group))].sort();
    const genders = [...new Set(sampleCases.cases.map(c => c.gender))].sort();
    const origins = [...new Set(sampleCases.cases.map(c => c.origin))].sort();
    const educations = [...new Set(sampleCases.cases.map(c => c.education))].sort();
    
    // Update dropdowns
    updateSelect('age-select', ages);
    updateSelect('gender-select', genders);
    updateSelect('origin-select', origins);
    updateSelect('education-select', educations);
}

// Helper to update select options
function updateSelect(id, options) {
    const select = document.getElementById(id);
    if (!select) return;
    
    select.innerHTML = '';
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
    });
}

// Copy citation function
function copyCitation() {
    const citationText = document.getElementById('citation-text').textContent;
    navigator.clipboard.writeText(citationText).then(function() {
        const copyBtn = document.querySelector('.btn-copy');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(function() {
            copyBtn.innerHTML = originalHTML;
        }, 2000);
    });
}

// Prevent hover effects on disabled buttons (moved into main DOMContentLoaded)
function setupDisabledButtons() {
    const riseBtn = document.querySelector('.btn-rise');
    const thriveBtn = document.querySelector('.btn-thrive');
    
    if (riseBtn && thriveBtn) {
        // Store original text
        const riseText = riseBtn.innerHTML;
        const thriveText = thriveBtn.innerHTML;
        
        // Prevent any text changes
        riseBtn.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            this.innerHTML = riseText;
        });
        
        thriveBtn.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            this.innerHTML = thriveText;
        });
    }
}

function runAssessment() {
    if (!sampleCases) {
        alert('Sample data is still loading. Please try again.');
        return;
    }
    
    // Get selected values
    const ageGroup = document.getElementById('age-select').value;
    const gender = document.getElementById('gender-select').value;
    const origin = document.getElementById('origin-select').value;
    const education = document.getElementById('education-select').value;
    const english = document.getElementById('english-select').value;
    
    // Show loading state
    document.getElementById('assessment-results').innerHTML = 
        '<p class="text-muted text-center">Running multi-perspective assessment...</p>';
    
    // Find matching case or closest match
    const matchingCase = findMatchingCase(ageGroup, gender, origin, education, english);
    
    if (!matchingCase) {
        document.getElementById('assessment-results').innerHTML = 
            '<p class="text-danger text-center">No matching profile found in dataset. Please try different parameters.</p>';
        return;
    }
    
    // Simulate processing delay
    setTimeout(function() {
        // Use real scores from the case
        const scores = matchingCase.scores;
        const recommendedCountry = matchingCase.recommended_country;
        
        // Update perspective scores (average across all countries for display)
        const avgScores = calculateAverageScores(scores);
        document.getElementById('emotional-score').textContent = avgScores.emotional.toFixed(1) + '/10';
        document.getElementById('cultural-score').textContent = avgScores.cultural.toFixed(1) + '/10';
        document.getElementById('ethical-score').textContent = avgScores.ethical.toFixed(1) + '/10';
        
        // Display results with real data
        displayRealResults(matchingCase, avgScores);
    }, 1500);
}

function calculateScores(age, gender, origin, education, english) {
    // Base scores
    let emotional = 7.0;
    let cultural = 6.5;
    let ethical = 7.5;
    
    // Education adjustments
    if (education === 'University') {
        cultural += 1.0;
        ethical += 0.5;
        emotional += 0.3;
    } else if (education === 'Secondary') {
        cultural += 0.5;
        emotional += 0.2;
    } else if (education === 'None') {
        cultural -= 0.5;
        emotional -= 0.3;
    }
    
    // English proficiency
    if (english === 'Yes') {
        cultural += 1.5;
        emotional += 0.5;
        ethical += 0.3;
    } else {
        cultural -= 1.0;
        emotional -= 0.3;
    }
    
    // Age adjustments
    const ageNum = parseInt(age);
    if (ageNum < 25) {
        emotional += 0.5;
        cultural += 0.3;
    } else if (ageNum > 45) {
        emotional -= 0.3;
        cultural -= 0.2;
    }
    
    // Gender considerations
    if (gender === 'Female') {
        ethical += 0.2; // Additional vulnerability considerations
    }
    
    // Origin adjustments
    const originFactors = {
        'Somalia': { cultural: -0.5, emotional: 0, ethical: 0.3 },
        'South Sudan': { cultural: -0.3, emotional: -0.2, ethical: 0.4 },
        'Syria': { cultural: 0.5, emotional: -0.3, ethical: 0.2 },
        'Afghanistan': { cultural: 0, emotional: -0.5, ethical: 0.5 },
        'DR Congo': { cultural: -0.2, emotional: 0.2, ethical: 0.3 }
    };
    
    if (originFactors[origin]) {
        cultural += originFactors[origin].cultural;
        emotional += originFactors[origin].emotional;
        ethical += originFactors[origin].ethical;
    }
    
    // Ensure scores stay within bounds
    emotional = Math.max(1, Math.min(10, emotional));
    cultural = Math.max(1, Math.min(10, cultural));
    ethical = Math.max(1, Math.min(10, ethical));
    
    return {
        emotional: emotional.toFixed(1),
        cultural: cultural.toFixed(1),
        ethical: ethical.toFixed(1)
    };
}

function displayResults(scores, age, gender, origin, education, english) {
    // Calculate weighted score
    const weights = { emotional: 0.3, cultural: 0.4, ethical: 0.3 };
    const weighted = (
        scores.emotional * weights.emotional +
        scores.cultural * weights.cultural +
        scores.ethical * weights.ethical
    ).toFixed(1);
    
    // Country-specific scoring
    const countryScores = {
        'Canada': (weighted * 1.05).toFixed(1),
        'Germany': (weighted * 0.98).toFixed(1),
        'Sweden': (weighted * 0.96).toFixed(1),
        'USA': (weighted * 0.94).toFixed(1),
        'Australia': (weighted * 0.97).toFixed(1)
    };
    
    // Find best country
    let recommendedCountry = 'Canada';
    let highestScore = 0;
    for (const [country, score] of Object.entries(countryScores)) {
        if (parseFloat(score) > highestScore) {
            highestScore = parseFloat(score);
            recommendedCountry = country;
        }
    }
    
    // Display assessment results
    const resultsHTML = `
        <div class="assessment-item">
            <strong>Profile Summary:</strong> ${age} year old ${gender} from ${origin}, 
            ${education} education, English: ${english}
        </div>
        <div class="assessment-item">
            <strong>Weighted Assessment Score:</strong> ${weighted}/10
        </div>
        <div class="assessment-item">
            <strong>Recommended Country:</strong> ${recommendedCountry} (Score: ${countryScores[recommendedCountry]}/10)
        </div>
        <div class="assessment-item">
            <strong>Country Rankings:</strong><br>
            ${Object.entries(countryScores)
                .sort(([,a], [,b]) => b - a)
                .map(([country, score]) => `${country}: ${score}/10`)
                .join(' | ')}
        </div>
        <div class="assessment-item">
            <strong>Assessment Rationale:</strong><br>
            The multi-perspective assessment indicates ${recommendedCountry} as the optimal placement
            based on the weighted combination of emotional readiness (${scores.emotional}/10),
            cultural compatibility (${scores.cultural}/10), and ethical considerations (${scores.ethical}/10).
            ${english === 'Yes' ? 'English proficiency significantly enhances integration prospects.' : 
              'Language support programs will be essential for successful integration.'}
            The selector-validator architecture ensures robust and validated recommendations
            through iterative refinement across all three perspectives.
        </div>
    `;
    
    document.getElementById('assessment-results').innerHTML = resultsHTML;
}

// Find matching case from sample data
function findMatchingCase(ageGroup, gender, origin, education, english) {
    if (!sampleCases || !sampleCases.cases) return null;
    
    // Try exact match first
    let match = sampleCases.cases.find(c => 
        c.age_group === ageGroup &&
        c.gender === gender &&
        c.origin === origin &&
        c.education === education &&
        c.english === english
    );
    
    // If no exact match, find closest match
    if (!match) {
        // Try matching most important criteria
        match = sampleCases.cases.find(c => 
            c.origin === origin &&
            c.gender === gender &&
            c.education === education
        );
    }
    
    // If still no match, try origin and education
    if (!match) {
        match = sampleCases.cases.find(c => 
            c.origin === origin &&
            c.education === education
        );
    }
    
    // Last resort - just match origin
    if (!match) {
        match = sampleCases.cases.find(c => c.origin === origin);
    }
    
    // If still no match, return first case
    return match || sampleCases.cases[0];
}

// Calculate average scores across countries
function calculateAverageScores(countryScores) {
    let emotional = 0, cultural = 0, ethical = 0, count = 0;
    
    for (const country in countryScores) {
        const scores = countryScores[country];
        emotional += scores.emotional || 0;
        cultural += scores.cultural || 0;
        ethical += scores.ethical || 0;
        count++;
    }
    
    return {
        emotional: count > 0 ? emotional / count : 0,
        cultural: count > 0 ? cultural / count : 0,
        ethical: count > 0 ? ethical / count : 0
    };
}

// Display results using real case data
function displayRealResults(caseData, avgScores) {
    const scores = caseData.scores;
    const recommendedCountry = caseData.recommended_country;
    
    // Sort countries by weighted score
    const countryList = [];
    for (const country in scores) {
        const s = scores[country];
        countryList.push({
            name: country,
            weighted: s.weighted || 0,
            emotional: s.emotional || 0,
            cultural: s.cultural || 0,
            ethical: s.ethical || 0
        });
    }
    countryList.sort((a, b) => b.weighted - a.weighted);
    
    // Build results HTML
    const resultsHTML = `
        <div class="assessment-item">
            <strong>Profile Summary:</strong> ${caseData.age_group} ${caseData.gender} from ${caseData.origin}, 
            ${caseData.education} education, English: ${caseData.english}
        </div>
        <div class="assessment-item">
            <strong>Weighted Assessment Score:</strong> ${countryList[0].weighted.toFixed(1)}/10
        </div>
        <div class="assessment-item">
            <strong>Recommended Country:</strong> ${recommendedCountry} 
            (Score: ${scores[recommendedCountry].weighted.toFixed(1)}/10)
        </div>
        <div class="assessment-item">
            <strong>Country Rankings:</strong><br>
            ${countryList.map(c => `${c.name}: ${c.weighted.toFixed(1)}/10`).join(' | ')}
        </div>
        <div class="assessment-item">
            <strong>Assessment Rationale:</strong><br>
            Based on actual EMPATHIA system evaluation, ${recommendedCountry} is recommended
            for this refugee profile. The multi-perspective assessment shows:
            Emotional readiness (${avgScores.emotional.toFixed(1)}/10),
            Cultural compatibility (${avgScores.cultural.toFixed(1)}/10), and
            Ethical considerations (${avgScores.ethical.toFixed(1)}/10).
            This recommendation is derived from comprehensive AI agent analysis
            using the selector-validator architecture across all three perspectives.
        </div>
        <div class="assessment-item small text-muted">
            <em>Case ID: ${caseData.id.substring(0, 8)}...</em>
        </div>
    `;
    
    document.getElementById('assessment-results').innerHTML = resultsHTML;
}