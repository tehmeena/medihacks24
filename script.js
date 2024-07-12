document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('section1');
    const loginSignupSection = document.getElementById('sectionloginsignup');
    const loginButton = document.getElementById('login-button');
    const signUpButton = document.getElementById('signup-button');
    const gotoSignUp = document.getElementById('goto-signup');
    const gotoLogin = document.getElementById('goto-login');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');
    const roleSelection = document.getElementById('role-selection');
    const personalInfo = document.getElementById('personal-info');
    const inviteSection = document.getElementById('sectioninvite');
    const dashboardSection = document.getElementById('sectiondashboard');

    const hideButtons = () => {
        loginButton.style.display = 'none';
        signUpButton.style.display = 'none';
    };

    const hideWelcome = () => {
      welcomeSection.style.display = 'none';
    }
    
    // Show login form
    loginButton.addEventListener('click', () => {
        hideWelcome();
        hideButtons();
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
        roleSelection.style.display = 'none';
        personalInfo.style.display = 'none';
        inviteSection.style.display = 'none';
        dashboardSection.style.display = 'none';
    });

    // Show sign up form
    signUpButton.addEventListener('click', () => {
        hideWelcome();
        hideButtons();
        signUpForm.style.display = 'block';
        loginForm.style.display = 'none';
        roleSelection.style.display = 'none';
        personalInfo.style.display = 'none';
        inviteSection.style.display = 'none';
        dashboardSection.style.display = 'none';
    });

    // Switch to sign up form from login
    gotoSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        signUpForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Switch to login form from sign up
    gotoLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    // login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login form submitted');
        // Simulate successful login
        dashboardSection.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // sign up form submission
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle sign up logic here
        console.log('Sign up form submitted');
        // Show role selection after successful sign up
        roleSelection.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    // role selection
    const roleButtons = document.querySelectorAll('.role-button');
    roleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const role = e.target.dataset.role;
            roleSelection.style.display = 'none';
            personalInfo.style.display = 'block';
            handleRoleSelection(role);
        });
    });

    //when user clicks next it takes them to the invite section 
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        inviteSection.style.display = 'block';
        personalInfo.style.display = 'none';
    });

    const handleRoleSelection = (role) => {
        const pregnantContainer = document.getElementById('pregnant-container');
        const professionalContainer = document.getElementById('professional-container');

        pregnantContainer.style.display = 'none';
        professionalContainer.style.display = 'none';

        if (role === 'pregnant') {
            pregnantContainer.style.display = 'block';
        } else if (role === 'professional') {
            professionalContainer.style.display = 'block';
        }
    };

    //personal info form submission
    const personalForm = document.getElementById('personal-form');
    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle personal info submission logic here
        console.log('Personal info form submitted');
        // Simulate moving to dashboard or next section
        dashboardSection.style.display = 'block';
        personalInfo.style.display = 'none';
    });

    //  invite section buttons
    document.getElementById('yes-button-code').addEventListener('click', () => {
        // Handle "Yes" button logic here
        console.log('Yes, I have an invite code');
    });

    document.getElementById('no-button-code').addEventListener('click', () => {
        // Handle "No" button logic here
        console.log('No, I do not have an invite code');
    });
});
