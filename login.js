document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication check (replace with real authentication)
        if (username === 'user' && password === 'password') {
            // Save login state (using localStorage for simplicity)
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            // Show error message
            errorMessage.style.display = 'block';
        }
    });
});
