// Ensure script runs after HTML elements are loaded
document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');
    const loginBtn = document.getElementById('login-btn');

    incrementBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    loginBtn.addEventListener('click', () => {
        // Replace with real login logic, e.g. redirect or open a modal
        alert('Login clicked!');
    });
});