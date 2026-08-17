// Ensure script runs after HTML elements are loaded
document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');

    incrementBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });
});