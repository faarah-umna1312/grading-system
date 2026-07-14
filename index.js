const checkBtn = document.getElementById('check-btn');
const percentageInput = document.getElementById('percentage-input');
const cardDisplayArea = document.getElementById('card-display-area');
const errorMessage = document.getElementById('error-message');

function generateGradeCard() {
    const value = percentageInput.value.trim();
    
    if (value === '') {
        showError('Please enter a percentage score.');
        return;
    }
    
    const percentage = parseFloat(value);
    
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        showError('Please enter a valid percentage between 0 and 100.');
        return;
    }
    
    hideError();
    
    let gradeClass = '';
    let gradeDisplay = '';
    let badgeText = '';
    let titleText = '';
    let statusText = '';
    let gpaText = '';
    let minRange = 0;
    let maxRange = 100;

    if (percentage >= 96 && percentage <= 100) {
        gradeClass = 'app-grade';
        gradeDisplay = 'A++';
        badgeText = 'Outstanding';
        titleText = 'Masterful Performance!';
        statusText = '<i class="fa-solid fa-crown"></i> Perfect Score Tier';
        gpaText = '5.0';
        minRange = 96;
        maxRange = 100;
    } else if (percentage >= 91 && percentage <= 95) {
        gradeClass = 'ap-grade';
        gradeDisplay = 'A+';
        badgeText = 'Exceptional';
        titleText = 'Exceptional Work!';
        statusText = '<i class="fa-solid fa-star"></i> Elite Performance';
        gpaText = '4.7';
        minRange = 91;
        maxRange = 95;
    } else if (percentage >= 86 && percentage <= 90) {
        gradeClass = 'a-grade';
        gradeDisplay = 'A';
        badgeText = 'Excellent';
        titleText = 'Brilliant Results!';
        statusText = '<i class="fa-solid fa-medal"></i> Superior Standards';
        gpaText = '4.0';
        minRange = 86;
        maxRange = 90;
    } else if (percentage >= 81 && percentage <= 85) {
        gradeClass = 'bpp-grade';
        gradeDisplay = 'B++';
        badgeText = 'Very Good';
        titleText = 'Wonderful Progress!';
        statusText = '<i class="fa-solid fa-thumbs-up"></i> Highly Commended';
        gpaText = '3.7';
        minRange = 81;
        maxRange = 85;
    } else if (percentage >= 76 && percentage <= 80) {
        gradeClass = 'bp-grade';
        gradeDisplay = 'B+';
        badgeText = 'Good';
        titleText = 'Great Effort!';
        statusText = '<i class="fa-solid fa-check-double"></i> Strong Standing';
        gpaText = '3.3';
        minRange = 76;
        maxRange = 80;
    } else if (percentage >= 71 && percentage <= 75) {
        gradeClass = 'b-grade';
        gradeDisplay = 'B';
        badgeText = 'Competent';
        titleText = 'Solid Performance!';
        statusText = '<i class="fa-solid fa-check"></i> Above Average';
        gpaText = '3.0';
        minRange = 71;
        maxRange = 75;
    } else if (percentage >= 61 && percentage <= 70) {
        gradeClass = 'cpp-grade';
        gradeDisplay = 'C++';
        badgeText = 'Average';
        titleText = 'Good Attempt!';
        statusText = '<i class="fa-solid fa-arrow-up-right-dots"></i> Meeting Standards';
        gpaText = '2.0';
        minRange = 61;
        maxRange = 70;
    } else if (percentage >= 51 && percentage <= 60) {
        gradeClass = 'c-grade';
        gradeDisplay = 'C';
        badgeText = 'Passing';
        titleText = 'Grade Secured.';
        statusText = '<i class="fa-solid fa-graduation-cap"></i> Credit Earned';
        gpaText = '1.0';
        minRange = 51;
        maxRange = 60;
    } else {
        gradeClass = 'u-grade';
        gradeDisplay = 'U';
        badgeText = 'Ungraded';
        titleText = 'Action Required';
        statusText = '<i class="fa-solid fa-triangle-exclamation"></i> Needs Improvement';
        gpaText = '0.0 ';
        minRange = 0;
        maxRange = 50;
    }

    cardDisplayArea.innerHTML = `
        <div class="grade-card ${gradeClass}">
            <div class="visual-wrapper">
                <span class="badge">${badgeText}</span>
                <div class="grade-display">${gradeDisplay}</div>
            </div>
            <div class="content">
                <p class="subtitle">Academic Performance</p>
                <h2 class="title">${titleText}</h2>
                
                <div class="metrics">
                    <div class="metric-item">
                        <span class="label">Your Score</span>
                        <span class="val">${percentage}%</span>
                    </div>
                    <div class="metric-item">
                        <span class="label">Grade Range</span>
                        <span class="val">${minRange}% - ${maxRange}%</span>
                    </div>
                    <div class="metric-item">
                        <span class="label">GPA Equivalent</span>
                        <span class="val">${gpaText}</span>
                    </div>
                </div>
                
                <div class="footer">
                    <span class="status-text">${statusText}</span>
                    <button class="action-btn">View Report</button>
                </div>
            </div>
        </div>
    `;
}

function showError(msg) {
    errorMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${msg}`;
    errorMessage.style.display = 'flex';
    cardDisplayArea.innerHTML = '';
}

function hideError() {
    errorMessage.style.display = 'none';
}

checkBtn.addEventListener('click', generateGradeCard);

percentageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        generateGradeCard();
    }
});