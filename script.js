document.getElementById('registration-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault();
    }
});
// Example of a simple validation or script you might want to add
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Basic form validation or other scripts can go here
});
