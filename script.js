
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

    // Go back to Sign-Up Form if they click on Don't Have an account? 
    document.getElementById('goto-signup').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('login-signup-buttons').style.display = 'none';
    });

    // Go back to login if they click on Already have an account? 
    document.getElementById('goto-login').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-signup-buttons').style.display = 'none';
    });

    // Sign-up form submission - show role selection after submiting sign up info 
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // prevent form submission for now bc this is prototype
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('role-selection').style.display = 'block';
    });

    //What happens when user engages with the buttons to select their role 
    document.querySelectorAll('.role-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedRole = this.getAttribute('data-role');
            alert(`You selected: ${selectedRole}`); //just alerting what they selected for now until I add more logic
        });
    });


});
