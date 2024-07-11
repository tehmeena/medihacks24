
// Show sign-up form when sign-up button is clicked
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.signup-button').addEventListener('click', function() {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none'; // Hide login form 
        document.getElementById('login-signup-buttons').style.display = 'none';

    });

    // Show login form when login button is clicked
    document.querySelector('.login-button').addEventListener('click', function() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none'; // Hide sign-up form 
        document.getElementById('login-signup-buttons').style.display = 'none';

    });
});
