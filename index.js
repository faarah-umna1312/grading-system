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

    if (percentage >= 90 && percentage <= 100) {
        gradeClass = 'ap-grade';
        gradeDisplay = 'A+';
        badgeText = 'Outstanding';
        titleText = 'Exceptional Performance!';
        statusText = '<i class="fa-solid fa-crown"></i> Perfect Score Tier';
        gpaText = '5.0';
        minRange = 90;
        maxRange = 100;
    } else if (percentage >= 80 && percentage <= 89.9) {
        gradeClass = 'a-grade';
        gradeDisplay = 'A';
        badgeText = 'Excellent';
        titleText = 'Brilliant Results';
        statusText = '<i class="fa-solid fa-star"></i> Elite Performance';
        gpaText = '4.7';
        minRange = 80;
        maxRange = 89.9;
    } else if (percentage >= 70 && percentage <= 79.9) {
        gradeClass = 'b-grade';
        gradeDisplay = 'B';
        badgeText = 'Very Good';
        titleText = 'Wonderful Progress!';
        statusText = '<i class="fa-solid fa-medal"></i> Commendable';
        gpaText = '4.0';
        minRange = 70;
        maxRange = 79.9;
    } else if (percentage >= 60 && percentage <= 69.9) {
        gradeClass = 'c-grade';
        gradeDisplay = 'C';
        badgeText = 'Good';
        titleText = 'Great Effort!';
        statusText = '<i class="fa-solid fa-thumbs-up"></i> Good Standing';
        gpaText = '3.7';
        minRange = 60;
        maxRange = 69.9;
    } else if (percentage >= 40 && percentage <= 59.9) {
        gradeClass = 'd-grade';
        gradeDisplay = 'D';
        badgeText = 'Passing';
        titleText = 'Grade Secured!';
        statusText = '<i class="fa-solid fa-check-double"></i> Credit Earned';
        gpaText = '3.3';
        minRange = 40;
        maxRange = 59.9;
    }  else if (percentage >= 0 && percentage <= 39.9) {
        gradeClass = 'fail';
        gradeDisplay = 'Fail';
        badgeText = 'Failed';
        titleText = 'Action Required';
        statusText = '<i class="fa-solid fa-triangle-exclamation"></i> Needs Improvement';
        gpaText = '3.0';
        minRange = 0;
        maxRange = 39.9;
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