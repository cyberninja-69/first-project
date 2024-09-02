document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }

    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', function() {
        // Clear login state
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
