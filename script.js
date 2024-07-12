
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

    //Adding personal information after they have selected their role 
    const roleButtons = document.querySelectorAll('.role-button');
    const personalInfo = document.getElementById('personal-info');
    const pregnantContainer = document.getElementById('pregnant-container');

    // Function to show the pregnant questions for pregnant users 
    function showPregnantQuestions() {
        pregnantContainer.style.display = 'block';
    }

    // Function to hide the pregnant questions for non-pregnant users 
    function hidePregnantQuestions() {
        pregnantContainer.style.display = 'none';
    }

    // Event listener for role buttons
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = button.getAttribute('data-role');

            // Show the personal info section
            personalInfo.style.display = 'block';

            // Show/hide the pregnant container based on role
            if (role === 'pregnant') {
                showPregnantQuestions();
            } else {
                hidePregnantQuestions();
            }
        });
    });


    // Event listener for personal info form submission
    const personalForm = document.getElementById('personal-form');
    personalForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission logic here
        // Example: Validate inputs, upload files, etc.
        // After successful submission, redirect or show confirmation
        alert('Form submitted successfully!');
        // Example: Redirect to another page
        // window.location.href = 'confirmation.html';
    });

});
