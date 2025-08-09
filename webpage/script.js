// EMPATHIA Assessment Demo
// Multi-agent refugee integration assessment system
// NeurIPS 2025 Creative AI Track submission
const refugeeData = {
  "profiles": [
    {
      "refugee_code": "REF-0001",
      "age": "24",
      "gender": "Man",
      "origin_country": "South Sudan",
      "household_size": "4",
      "english": "Yes",
      "work_status": "Inactive",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Canada",
      "overall_score": 7.4,
      "emotional_score": 6,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "Emotional Perspective Assessment Score: 6/10 The Emotional Perspective assessment for this refugee individual is based on the available data, focusing on factors related to psychological readiness, resilience, motivation, and emotional well-being. The individual's young age of 24 could contribute positively to their adaptability and eagerness to learn. However, there is no information about personal motivation or mental health (assessment feature), which might suggest an average level of emotional well-being. Although the person has been inactive in employment for some time (work situation), this does not necessarily imply a negative impact on their confidence. The fact that they are not employed last 7 days (employment status) may indicate a temporary or short-term unemployment, which could affect their emotional state. However, the absence of any cognitive difficulties (assessment feature) and no dependency burden (dependency situation.0) are positive factors. In conclusion, the individual's young age, lack of employment history impact on confidence, and absence of emotional stressors contribute positively to their emotional readiness for employment. However, the uncertainty surrounding personal motivation and mental health prevents a more definitive assessment.",
      "cultural_reasoning": "Cultural Perspective The individual is likely to succeed in gaining and maintaining employment in Australia due to several factors related to cultural integration. Firstly, their education level (education level) indicates a basic education, which may not be directly applicable to the Australian workforce. However, this could also mean they have some familiarity with local systems, making it easier for them to adapt. Additionally, having a refugee identity card (assessment feature) means they can legally integrate into the workforce. Their previous work experience (work experience), although limited, shows they had exposure to workplace culture in their country of origin (South Sudan). This could translate to some understanding of workplace dynamics and expectations. While there is no explicit information about language skills, having read and written in Swahili (language ability) suggests a certain level of linguistic adaptability. Although they may not be literate in English or other relevant languages for the Australian job market, this does not necessarily mean they will struggle to integrate culturally. Finally, with no dependents (dependency situation.0`), the individual has more flexibility to focus on their employment and integration into the Australian workforce. Overall, considering these factors, I give a score of 8/10 for the Cultural Perspective.",
      "ethical_reasoning": "Ethical Perspective Assessment The individual in this profile has a relatively low dependency ratio, which is beneficial for employment. However, their previous occupation (work experience) was categorized as 'Poor', indicating potential difficulties in securing a well-paying job. Moreover, the lack of an active work status in the last 7 days (employment status) and inactive work status (work situation) suggest that they may be struggling to find employment or face challenges in their current work situation. Furthermore, although they do not have a disability (disability status), some difficulties exist, such as vision (assessment feature), hearing (assessment feature), mobility (assessment feature), and cognitive (assessment feature) issues. The lack of a employment authorization (assessment feature) may create ethical concerns regarding their legal employment status in Australia. Lastly, the individual has a identification documents (assessment feature), which is essential for workforce integration into the workforce. In conclusion, while there are some positive factors, such as no dependency ratio and possession of a identification documents, the individual faces significant challenges, including a low-income occupation, inactive work status, and difficulties that may require accommodations or support.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 6/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Canada with an overall score of 7.4/10"
    },
    {
      "refugee_code": "REF-0002",
      "age": "21",
      "gender": "Man",
      "origin_country": "South Sudan",
      "household_size": "4",
      "english": "No",
      "work_status": "Inactive",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Canada",
      "overall_score": 7.7,
      "emotional_score": 7,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "The individual's emotional readiness for employment is somewhat uncertain due to limited information provided. However, considering their relatively young age (21) and no indication of significant cognitive or mobility difficulties, I believe they have a moderate chance of succeeding in the job market. The fact that they were employed recently (employment status) suggests they may be motivated to find new work opportunities. Additionally, having a valid refugee identity card (assessment feature) indicates some integration into Australian society, which could positively impact their emotional well-being. On the other hand, being inactive in the job market for some time (work situation) may have affected their confidence. The dependency burden is relatively low (dependency situation.0`), which should not significantly impact their emotional state. In conclusion, while there are some uncertainties regarding this individual's emotional preparedness for employment, I believe they have a reasonable chance of succeeding with proper support and guidance.",
      "cultural_reasoning": "The individual's cultural perspective for employment in Australia is somewhat limited due to their lack of English literacy (language ability) and limited education level (education level). Although they have a refugee identity card (assessment feature), this may not be sufficient for workforce integration into the workforce. Their previous work experience (work experience) is unknown, which may impact their ability to adapt to Australian workplace culture. The individual's dependency ratio (dependency situation) is very low (0.0), indicating they have no dependents and can focus on employment. However, this does not compensate for the language barrier and limited education level. Overall, the individual faces significant cultural barriers to employment in Australia, primarily due to their lack of English literacy and limited education level.",
      "ethical_reasoning": "Ethical Perspective Assessment: Score 8/10. From an ethical standpoint, this individual presents several positive indicators for employment success. Their young age (21) and lack of disability suggest no immediate physical barriers to employment. The absence of dependents (dependency ratio 0.0) means they can focus entirely on their own integration and employment without competing family obligations. While they lack employment authorization, this is a systemic issue that can be addressed through proper channels. The ethical concern around documentation status is balanced by their fundamental right to seek employment and contribute to society. Their previous work experience, though limited, demonstrates a willingness to participate in the workforce. The lack of English proficiency may create some initial challenges but does not constitute an ethical barrier to employment. Overall, this individual deserves fair consideration for employment opportunities, with appropriate support for language learning and documentation processes.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 7/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Canada with an overall score of 7.7/10"
    },
    {
      "refugee_code": "REF-0003",
      "age": "22",
      "gender": "Woman",
      "origin_country": "South Sudan",
      "household_size": "15",
      "english": "Yes",
      "work_status": "Employed",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Germany",
      "overall_score": 8.0,
      "emotional_score": 8,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "8/10 The emotional perspective of this refugee individual is relatively strong, with several factors contributing to their potential for employment success. Firstly, they are currently employed (employment status), which indicates a level of motivation and adaptability. Their age (22) also suggests that they may be more resilient and adaptable compared to older individuals. Another positive aspect is the absence of any reported difficulties (assessment feature, assessment feature, assessment feature, assessment feature) which could impact their emotional well-being or work performance. Additionally, the lack of disability (disability status) suggests that they do not have significant physical or mental limitations. However, the high dependency ratio (1.14285719394684) may indicate a level of stress and burden due to the large household size (15). This could potentially impact their emotional state and motivation for employment. Overall, while there are some potential challenges, this individual's current employment status, age, and lack of reported difficulties suggest that they have a relatively strong emotional foundation for success in the job market.",
      "cultural_reasoning": "## Cultural Perspective The individual's cultural perspective is relatively strong. Although they are from South Sudan and may not have immediate familiarity with Australian culture, their education level indicates a basic level of understanding. Their ability to read and write in English (language ability) demonstrates a significant foundation for workplace adaptation and integration. Additionally, the fact that they have been employed (employment status) suggests they are already adapting to some extent. Their depend ratio is relatively high, but this may not necessarily impact their employment prospects directly. However, it highlights the importance of considering family responsibilities in any future employment plans. Overall, while there may be some cultural barriers, the individual's existing work experience and language skills provide a solid foundation for successful integration into the Australian workforce.",
      "ethical_reasoning": "Ethical Perspective: Score 8/10. This individual demonstrates strong ethical indicators for employment success. As a 22-year-old woman currently employed, she shows active workforce participation despite potential gender-based challenges. The large household size (15) presents both an ethical strength and consideration - while the high dependency ratio (1.14) indicates significant family responsibilities, it also demonstrates her commitment to supporting others. The lack of employment authorization is a systemic barrier that should not ethically preclude her from opportunities. Her English proficiency removes language as an ethical barrier. The absence of disability means no accommodation needs, though we recognize employment should be accessible to all. Her current employment status proves her capability and determination. From an ethical standpoint, supporting this individual's employment directly benefits a large household, multiplying the positive social impact. Fair consideration should be given with recognition of her proven work ethic and family responsibilities.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 8/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Germany with an overall score of 8.0/10"
    },
    {
      "refugee_code": "REF-0004",
      "age": "19",
      "gender": "Woman",
      "origin_country": "Sudan",
      "household_size": "3",
      "english": "Yes",
      "work_status": "Inactive",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Canada",
      "overall_score": 7.4,
      "emotional_score": 6,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "Based on the available data, I assess that this individual is likely to succeed in gaining and maintaining employment with a score of 7 out of 10 from an emotional perspective. The individual's age (19) suggests a relatively high level of adaptability and resilience, which could contribute positively to their employability. Additionally, the fact that they are currently inactive but have previously been employed (work situation) may indicate a willingness to work or a desire to return to employment. There is no indication of any cognitive difficulties or emotional challenges that would significantly impact their employability. The depend ratio is 0, suggesting the individual has no dependent family members to support, which could also contribute positively to their employability. Overall, while there may be some uncertainty regarding the individual's current employment status and motivation, the available data suggests a relatively strong emotional foundation for success in the workforce.",
      "cultural_reasoning": "In this Cultural Perspective assessment for a refugee individual from Sudan moving to Australia, I evaluate their likelihood of cultural integration and adaptation based on available data. Language Literacy: The individual has some English literacy (language ability), which is crucial for effective communication in the Australian workplace. Although there's no direct mention of Arabic or Swahili literacy, it's reasonable to assume a basic understanding due to their Sudanese origin. However, this may require additional support or training for more complex tasks. Education Level: The highest educational grade completed is not explicitly mentioned, but relevant feature suggests some formal education. This could indicate familiarity with local systems and cultural norms in the host country. Additionally, relevant feature implies some exposure to Western or modern education. Previous Work Experience: The profile doesn't provide direct information on previous work experience (work experience). However, considering the individual's age (19) and relatively recent displacement, it's likely they have limited professional experience. This might impact their cultural adaptation in the Australian workplace. Documentation: The absence of essential documentation like a refugee ID (assessment feature) and employment authorization (assessment feature) creates uncertainty regarding workforce integration and job prospects. However, this doesn't preclude the individual from cultural integration entirely, as they may still learn about Australian culture through social networks or community organizations. Household Size: The household consists of three members (hhsize = 3), which is relatively small. This might positively impact the individual's ability to adapt culturally and socially in Australia. In conclusion, considering these factors, I assign a score of 7/10 for cultural integration in this refugee individual from Sudan moving to Australia. While there are some barriers to overcome (e.g., language proficiency, documentation), their relatively young age, some formal education, and small household size provide opportunities for adaptation.",
      "ethical_reasoning": "Ethical Perspective Assessment: Score 8/10. This 19-year-old woman from Sudan presents a compelling ethical case for employment support. Her young age represents both vulnerability and potential - ethically, we must ensure she has opportunities for self-sufficiency rather than dependency. The small household size (3) suggests manageable family obligations. While currently inactive in the workforce, this may reflect lack of opportunity rather than unwillingness. Her English proficiency eliminates a common barrier, demonstrating preparedness for integration. The absence of disability means no immediate accommodation needs, though ethical employment practices should support all abilities. The lack of employment authorization is a bureaucratic rather than ethical barrier. From a rights-based perspective, this young woman deserves access to employment opportunities that allow her to build a future. Supporting her employment is ethically imperative to prevent long-term marginalization and to honor her potential contribution to society.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 6/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Canada with an overall score of 7.4/10"
    },
    {
      "refugee_code": "REF-0005",
      "age": "24",
      "gender": "Man",
      "origin_country": "Burundi",
      "household_size": "3",
      "english": "No",
      "work_status": "Employed",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "United States",
      "overall_score": 5.9,
      "emotional_score": 8,
      "cultural_score": 5,
      "ethical_score": 5,
      "emotional_reasoning": "The individual's emotional perspective is generally positive, with a score of 8 out of 10. Despite some difficulties in mobility, they have been employed for at least an hour in the past week (employment status) and have had experience working in their own agricultural business (work experience). Their education level is Form 1/Grade 9 (education level), which indicates a basic education level, but they have managed to secure employment in Australia. Their dependency ratio (dependency situation.5`) suggests that they have some dependents, but not too many, which could affect their emotional well-being. The lack of any significant disabilities or difficulties (disability status, assessment feature) also contributes positively to their emotional perspective.",
      "cultural_reasoning": "Cultural Perspective: Score 5/10. This individual faces moderate cultural integration challenges. Coming from Burundi with no English proficiency presents a significant language barrier for workplace communication and cultural adaptation. However, being currently employed demonstrates existing workplace cultural navigation skills. The small household size (3) may facilitate easier cultural adjustment with fewer competing cultural influences. His age (24) suggests adaptability to new cultural norms. The lack of employment authorization may limit exposure to formal workplace culture. Previous agricultural business experience indicates entrepreneurial spirit that transcends cultural boundaries. While language remains a major barrier, his proven ability to maintain employment suggests practical cultural competence. Cultural integration would benefit significantly from language support and cultural orientation programs.",
      "ethical_reasoning": "Ethical Perspective: Score 5/10. This individual presents mixed ethical considerations. While currently employed, demonstrating self-sufficiency, the lack of employment authorization raises concerns about potential exploitation and lack of workplace protections. The language barrier may make him vulnerable to unfair treatment. His agricultural background and current employment show strong work ethic. The dependency ratio (0.5) indicates some family responsibilities but not overwhelming. Age (24) and gender present no ethical barriers. The absence of disability means no accommodation needs. Ethically, while we must ensure fair treatment and protection from exploitation, his demonstrated work capacity and contribution deserve recognition. Support should focus on regularizing status and ensuring workplace rights are protected.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 8/10, Cultural: 5/10, Ethical: 5/10 - recommendation is United States with an overall score of 5.9/10"
    },
    {
      "refugee_code": "REF-0006",
      "age": "29",
      "gender": "Man",
      "origin_country": "Somalia",
      "household_size": "12",
      "english": "No",
      "work_status": "Employed",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Canada",
      "overall_score": 8.0,
      "emotional_score": 8,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "8/10 The individual's emotional readiness for employment is relatively strong. At 29 years old (age information), they have a reasonable amount of work experience and might be more resilient in the face of challenges. As a male (demographic feature) from Somalia (origin information), they may have faced emotional difficulties during their displacement, but this experience can also foster a strong sense of motivation to succeed. The fact that they are currently employed (employment status, work situation) suggests they have some emotional stability and coping mechanisms. However, the lack of information about cognitive difficulties (assessment feature) makes it difficult to assess their mental well-being more accurately. Additionally, the relatively high dependency ratio (dependency situation.333333343267441`) may contribute to stress or anxiety. Considering these factors, I assign a score of 8/10, acknowledging that the individual's emotional readiness is solid but not perfect due to the uncertainty surrounding their cognitive difficulties and family responsibilities.",
      "cultural_reasoning": "The individual's cultural perspective is strong, with a relatively high score of 8/10. This is due to several factors. Firstly, they have a moderate education level (Form 4/Grade 12), which indicates some familiarity with the Australian education system and culture. Secondly, they have previous work experience as technicians and associate professionals, which shows they can adapt to the workplace culture in Australia. Additionally, they possess documentation required for workforce integration into the workforce (assessment feature), indicating they are well-prepared to navigate the job market. While there is no information on their proficiency in English, literacy in other languages (e.g., Swahili) can still be an asset in communicating with colleagues or clients from diverse backgrounds. The dependency situation.333333343267441 suggests they may have some dependents, which could impact their work-life balance but does not necessarily affect their ability to integrate culturally.",
      "ethical_reasoning": "The individual is likely to face some challenges in gaining and maintaining employment due to certain ethical considerations. Firstly, although they do not have a significant disability (disability status), there are difficulties that could potentially impact their job performance (e.g., assessment feature). This might require workplace accommodations or adjustments, which would be essential for fair and inclusive employment. Secondly, the individual's refugee status and lack of documentation (assessment feature) could lead to concerns about legal employment and potential exploitation. It is crucial that they have a valid employment authorization (assessment feature), which is not explicitly stated but would be vital for ethical employment in Australia. Thirdly, as a man from Somalia, the individual might face biases or stereotypes in certain job environments, particularly if they are not familiar with Australian culture and customs (country of origin). The dependency ratio (dependency situation.333333343267441`) suggests that this individual may have some family responsibilities, which could impact their ability to fully dedicate themselves to employment. Overall, while the individual has some strengths, such as being employed in the past seven days (employment status), they are likely to face certain ethical challenges in securing and maintaining employment.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 8/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Canada with an overall score of 8.0/10"
    },
    {
      "refugee_code": "REF-0007",
      "age": "29",
      "gender": "Woman",
      "origin_country": "DR Congo",
      "household_size": "5",
      "english": "No",
      "work_status": "Inactive",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "Canada",
      "overall_score": 7.4,
      "emotional_score": 6,
      "cultural_score": 8,
      "ethical_score": 8,
      "emotional_reasoning": "Emotional Perspective: Score 6/10. This 29-year-old woman from DR Congo presents moderate emotional readiness for employment. Her current inactive status and lack of recent employment may have impacted her confidence and motivation levels. However, her age suggests emotional maturity and life experience that can be valuable assets. The moderate household size (5) with a dependency ratio of 1.5 indicates significant family responsibilities that may create both stress and motivation for finding employment. Her previous experience running an agricultural business demonstrates resilience and entrepreneurial spirit, which are positive emotional indicators. The lack of English proficiency may contribute to feelings of isolation or frustration in job-seeking. However, her literacy in Arabic shows learning capability and cognitive flexibility. The absence of disability suggests no physical barriers affecting emotional well-being. While she faces challenges, her entrepreneurial background and maturity suggest she has developed coping mechanisms. With appropriate emotional support and language assistance, she has potential for successful employment integration.",
      "cultural_reasoning": "## Cultural Perspective The individual is a woman from the Democratic Republic of Congo, with an agricultural business background in her home country. Although she has not been employed in the last 7 days and is currently inactive, her age (29) indicates that she may be adaptable to the new environment. Her education level (education level) remains unclear, but as a woman from a rural setting, she might have limited formal education. However, her experience running an agricultural business suggests some entrepreneurial skills. The lack of documentation (assessment feature, assessment feature) is concerning for cultural integration and legal employment status in Australia. Her inability to speak English (language ability) limits her employability in the short term. On the other hand, she can read and write in Arabic (language ability), which might be useful in certain industries or communities. The individual's family size (relevant feature) and lack of disability (disability status) suggest that she has a relatively stable situation, which could impact her employment prospects. A dependency ratio (dependency situation.5`) indicates that she may have more responsibilities than earning-age household members, influencing her ability to work. In conclusion, the individual faces significant cultural integration and language barriers, but her entrepreneurial experience and basic literacy in Arabic might be valuable assets. Her family situation and lack of disability also affect her employment prospects.",
      "ethical_reasoning": "Ethical Perspective: Score 8/10. This 29-year-old woman from DR Congo deserves strong ethical consideration for employment support. Her gender and refugee status create intersecting vulnerabilities that require addressing systemic barriers. The dependency ratio of 1.5 with a household of 5 means her employment directly impacts multiple lives, creating an ethical imperative for support. Her previous experience as an agricultural entrepreneur demonstrates self-reliance and contribution despite challenging circumstances. The lack of employment authorization is a bureaucratic barrier that should not overshadow her fundamental right to work and provide for her family. Her current inactive status may reflect systemic exclusion rather than personal choice. The absence of disability means no accommodation needs, but her language barrier requires institutional support rather than individual blame. From an ethical standpoint, her entrepreneurial background shows she has already contributed economically in difficult circumstances. Supporting her employment is not just about individual benefit but about recognizing the broader social justice implications of refugee women's economic participation. Fair employment practices should account for her skills while providing necessary language and documentation support.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 6/10, Cultural: 8/10, Ethical: 8/10 - recommendation is Canada with an overall score of 7.4/10"
    },
    {
      "refugee_code": "REF-0008",
      "age": "33",
      "gender": "Woman",
      "origin_country": "South Sudan",
      "household_size": "12",
      "english": "Yes",
      "work_status": "Employed",
      "work_permit": "No",
      "disability": "No",
      "recommended_country": "United States",
      "overall_score": 5.9,
      "emotional_score": 8,
      "cultural_score": 5,
      "ethical_score": 5,
      "emotional_reasoning": "As an Emotional Perspective agent, I assess the individual's emotional readiness for employment in Australia. Considering their age (33) and having a steady employment history (employment status), they seem to have a relatively high level of adaptability and motivation. The lack of cognitive difficulties (assessment feature) further supports this notion. Additionally, their family situation appears manageable with 11 dependents (relevant feature), which may contribute to the individual's emotional resilience. Although they are from South Sudan (origin information), having a refugee ID (assessment feature) indicates some level of integration and familiarity with the host country, Australia. However, not having a employment authorization (assessment feature) could raise concerns about legal employment status. Overall, I believe their emotional well-being is relatively strong, but they may face challenges related to integrating into the Australian workforce.",
      "cultural_reasoning": "Cultural Perspective: Score 5/10. This 33-year-old woman from South Sudan faces moderate cultural adaptation challenges despite being currently employed. Her English proficiency is a significant advantage for cultural integration and workplace communication. However, the very large household size (12) may create competing cultural obligations and limit adaptation flexibility. Her age suggests established cultural patterns that may be harder to modify. Being employed indicates existing cultural navigation skills in the workplace. The lack of employment authorization may limit access to formal cultural integration programs. Her gender may face specific cultural challenges in certain work environments. The combination of English skills and current employment suggests functional cultural competence, but the large family obligations may impact full cultural integration. Support should focus on balancing cultural preservation with adaptation needs.",
      "ethical_reasoning": "Ethical Perspective: Score 5/10. This individual presents complex ethical considerations. As a 33-year-old woman supporting a household of 12, she demonstrates remarkable resilience and responsibility. Currently employed despite lacking authorization raises concerns about workplace vulnerability and potential exploitation. The high dependency burden creates an ethical imperative to support her employment for the welfare of many dependents. Her English proficiency reduces communication barriers that could lead to unfair treatment. Age and gender may expose her to discrimination. The absence of disability means no accommodation needs, but her family responsibilities require consideration. Ethically, while irregular status is concerning, her contribution to supporting a large household and maintaining employment despite challenges deserves recognition and support. Priority should be given to regularizing her status to ensure workplace protections while recognizing her essential role as a provider.",
      "validator_consensus": "Based on the multi-agent assessment with scores - Emotional: 8/10, Cultural: 5/10, Ethical: 5/10 - recommendation is United States with an overall score of 5.9/10"
    }
  ]
};





// Global variable for current profile
let currentProfile = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing EMPATHIA demo with embedded data...');
    populateRefugeeSelector();
    setupDisabledButtons();
});

// Populate refugee code selector
function populateRefugeeSelector() {
    const selector = document.getElementById('refugee-code-select');
    if (!selector) {
        console.error('Could not find refugee-code-select element');
        return;
    }
    
    const options = ['<option value="">Select a refugee code...</option>'];
    refugeeData.profiles.forEach((profile, index) => {
        options.push(`<option value="${index}">${profile.refugee_code} - ${profile.age}y ${profile.gender}, ${profile.origin_country}</option>`);
    });
    selector.innerHTML = options.join('');
    
    // Add change event listener
    selector.addEventListener('change', function() {
        if (this.value !== '') {
            selectRefugeeProfile(parseInt(this.value));
        } else {
            currentProfile = null;
            // Profile details always visible
            resetScores();
        }
    });
}

// Select a refugee profile
function selectRefugeeProfile(index) {
    currentProfile = refugeeData.profiles[index];
    displayProfileDetails();
    // Profile details always visible
    document.getElementById('run-assessment-btn').disabled = false;
    // Assessment reasoning always visible
    document.getElementById('recommendation-card').style.display = 'none';
    resetScores();
}

// Display selected profile details
function displayProfileDetails() {
    if (!currentProfile) return;
    
    const featuresDiv = document.getElementById('profile-features');
    
    const featuresHTML = `
        <div class="row">
            <div class="col-md-6">
                <p><strong>Refugee Code:</strong> ${currentProfile.refugee_code}</p>
                <p><strong>Age:</strong> ${currentProfile.age} years</p>
                <p><strong>Gender:</strong> ${currentProfile.gender}</p>
                <p><strong>Country of Origin:</strong> ${currentProfile.origin_country}</p>
                <p><strong>Household Size:</strong> ${currentProfile.household_size} members</p>
            </div>
            <div class="col-md-6">
                <p><strong>English Proficiency:</strong> ${currentProfile.english}</p>
                <p><strong>Work Status:</strong> ${currentProfile.work_status}</p>
                <p><strong>Employment Authorization:</strong> ${currentProfile.work_permit}</p>
                <p><strong>Has Disability:</strong> ${currentProfile.disability}</p>
            </div>
        </div>
    `;
    
    featuresDiv.innerHTML = featuresHTML;
}

// Reset score displays
function resetScores() {
    document.getElementById('cultural-score').textContent = '-';
    document.getElementById('emotional-score').textContent = '-';
    document.getElementById('ethical-score').textContent = '-';
    document.getElementById('cultural-score').style.color = '#5DADE2';
    document.getElementById('emotional-score').style.color = '#F5B041';
    document.getElementById('ethical-score').style.color = '#BB8FCE';
    document.getElementById('assessment-results').innerHTML = 
        '<h5 class="mb-3" style="color: #2E86C1;"><i class="fas fa-brain"></i> Multi-Agent Assessment Reasoning</h5>' +
        '<div class="alert alert-info" style="background-color: #e3f2fd; border: none;">' +
        '<i class="fas fa-info-circle"></i> Select a refugee profile and run the assessment to see detailed reasoning from each agent</div>';
}

// Copy citation to clipboard
function copyCitation() {
    const citation = document.getElementById('citation-text').textContent;
    navigator.clipboard.writeText(citation).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.backgroundColor = '#6c757d';
        }, 2000);
    });
}

// Setup disabled button handlers
function setupDisabledButtons() {
    const riseBtn = document.querySelector('.btn-rise');
    const thriveBtn = document.querySelector('.btn-thrive');
    
    if (riseBtn && thriveBtn) {
        const riseText = riseBtn.innerHTML;
        const thriveText = thriveBtn.innerHTML;
        
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

// Run SEED Assessment with real data
function runSEEDAssessment() {
    if (!currentProfile) {
        alert('Please select a refugee profile first');
        return;
    }
    
    // Show reasoning section
    // Assessment reasoning always visible
    
    // Show loading state
    document.getElementById('assessment-results').innerHTML = 
        '<h5 class="mb-3" style="color: #2E86C1;"><i class="fas fa-brain"></i> Multi-Agent Assessment Reasoning</h5>' +
        '<div class="alert alert-warning" style="background-color: #fff3cd; border: none; text-align: center;">' +
        '<i class="fas fa-spinner fa-spin"></i> Running multi-agent SEED assessment...</div>';
    
    // Reset scores
    resetScores();
    
    // Simulate processing time
    setTimeout(() => {
        // Use real scores from the profile (already out of 10)
        const emotionalScore = currentProfile.emotional_score;
        const culturalScore = currentProfile.cultural_score;
        const ethicalScore = currentProfile.ethical_score;
        const overallScore = currentProfile.overall_score;
        
        // Animate scores (Cultural first)
        animateScore('cultural-score', culturalScore, true);
        animateScore('emotional-score', emotionalScore, true);
        animateScore('ethical-score', ethicalScore, true);
        
        // Show recommendation card
        document.getElementById('recommendation-card').style.display = 'block';
        document.getElementById('recommended-country').textContent = currentProfile.recommended_country;
        document.getElementById('overall-score').textContent = overallScore.toFixed(1) + '/10';
        
        // Display full assessment results with real reasoning
        displayAssessmentResults();
    }, 1500);
}

// Display assessment results with real reasoning
function displayAssessmentResults() {
    if (!currentProfile) return;
    
    const resultsHTML = `
        <div class="card mb-3" style="border-left: 5px solid #5DADE2;">
            <div class="card-body">
                <h6 style="color: #5DADE2;">
                    <i class="fas fa-globe-americas"></i> Cultural Agent Assessment
                    <span class="float-right badge" style="background-color: #5DADE2; color: white;">${currentProfile.cultural_score}/10</span>
                </h6>
                <p style="margin-top: 10px; line-height: 1.8; font-size: 0.95rem; text-align: justify;">
                    ${currentProfile.cultural_reasoning}
                </p>
            </div>
        </div>
        
        <div class="card mb-3" style="border-left: 5px solid #F5B041;">
            <div class="card-body">
                <h6 style="color: #F5B041;">
                    <i class="fas fa-heart"></i> Emotional Agent Assessment
                    <span class="float-right badge" style="background-color: #F5B041; color: white;">${currentProfile.emotional_score}/10</span>
                </h6>
                <p style="margin-top: 10px; line-height: 1.8; font-size: 0.95rem; text-align: justify;">
                    ${currentProfile.emotional_reasoning}
                </p>
            </div>
        </div>
        
        <div class="card mb-3" style="border-left: 5px solid #BB8FCE;">
            <div class="card-body">
                <h6 style="color: #BB8FCE;">
                    <i class="fas fa-balance-scale"></i> Ethical Agent Assessment
                    <span class="float-right badge" style="background-color: #BB8FCE; color: white;">${currentProfile.ethical_score}/10</span>
                </h6>
                <p style="margin-top: 10px; line-height: 1.8; font-size: 0.95rem; text-align: justify;">
                    ${currentProfile.ethical_reasoning}
                </p>
            </div>
        </div>
        
        <div class="card mb-3" style="background-color: #f8f9fa; border-left: 5px solid #333;">
            <div class="card-body">
                <h6 style="color: #333;">
                    <i class="fas fa-check-double"></i> Validator Consensus
                </h6>
                <p style="margin-top: 10px; line-height: 1.8; font-size: 0.95rem; font-weight: 500; text-align: justify;">
                    ${currentProfile.validator_consensus}
                </p>
            </div>
        </div>
        
        <div class="alert alert-secondary" style="background-color: #f0f8ff; border: 1px solid #b8daff; margin-top: 20px;">
            <small>
                <i class="fas fa-info-circle"></i> 
                <strong>Note:</strong> This assessment demonstration uses sample data with realistic characteristics. 
                For access to actual UN Kakuma refugee data, please refer to the Dataset section and request directly from UNHCR.
            </small>
        </div>
    `;
    
    document.getElementById('assessment-results').innerHTML = resultsHTML;
}

// Animate score display (modified for out of 10 scale)
function animateScore(elementId, targetScore, isOutOfTen = false) {
    const element = document.getElementById(elementId);
    const startScore = 0;
    const duration = 1000;
    const steps = 30;
    const increment = (targetScore - startScore) / steps;
    let currentStep = 0;
    
    // Keep original colors for each perspective
    const originalColors = {
        'emotional-score': '#F5B041',
        'cultural-score': '#5DADE2',
        'ethical-score': '#BB8FCE'
    };
    
    const timer = setInterval(() => {
        currentStep++;
        let currentScore = startScore + (increment * currentStep);
        
        // Display with one decimal place for out of 10 scores
        if (isOutOfTen) {
            element.textContent = currentScore.toFixed(1);
        } else {
            element.textContent = Math.round(currentScore);
        }
        
        // Keep the perspective color consistent
        element.style.color = originalColors[elementId] || '#007bff';
        
        if (currentStep >= steps) {
            clearInterval(timer);
            if (isOutOfTen) {
                element.textContent = targetScore.toFixed(0);
            } else {
                element.textContent = targetScore;
            }
        }
    }, duration / steps);
}