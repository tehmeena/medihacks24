import React, { useState } from 'react';
import './App.css';
import Forms from './Forms'; 

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showRoleForm, setShowRoleForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [selectedRole, setSelectedRole] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
    setShowRoleForm(false);
  };

  const handleSignUpClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
    setShowRoleForm(false);
  };

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(!showSignUpForm);
    setShowRoleForm(false);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully');
    setShowSignUpForm(false);
    setShowRoleForm(true);
    setIsLoggedIn(true);
  };

  const handleLoginFormSubmit = (e) => {
    //

  };


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleRoleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Role selected:', selectedRole);
  };

  return (
    <div>
        {!isLoggedIn && ( //Show welcome page as long as user is not logged in 
        <section id="section1">
          <header>Welcome</header>
          <p>Hello world for now!</p>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </section>
      )}

      <Forms
        showLoginForm={showLoginForm}
        showSignUpForm={showSignUpForm}
        showRoleForm={showRoleForm}
        selectedRole={selectedRole}
        handleToggleForm={handleToggleForm}
        handleRoleChange={handleRoleChange}
        handleRoleFormSubmit={handleRoleFormSubmit}
        handleSignupFormSubmit={handleSignupFormSubmit}
      />
    </div>
  );
};

export default App;
