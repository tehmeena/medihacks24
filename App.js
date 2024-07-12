import React, { useState } from 'react';
import './App.css';
import Forms from './Forms'; 

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showRoleForm, setShowRoleForm] = useState(false);
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
    console.log('Sign Up button clicked which means showroleform is FALSE');
  };

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(!showSignUpForm);
    setShowRoleForm(false);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    setShowSignUpForm(false);
    setShowRoleForm(true);
    console.log(showRoleForm);
    console.log('Sign Up form submitted which means showroleform is TRUE');
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleRoleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Role selected:', selectedRole);
    // Additional logic for handling role-specific questions can be added here
  };

  console.log('showLoginForm:', showLoginForm);
  console.log('showSignUpForm:', showSignUpForm);
  console.log('showRoleForm:', showRoleForm);
  console.log('selectedRole:', selectedRole);

  return (
    <div>
      <section id="section1">
        <header>Welcome</header>
        <p>Hello world for now!</p>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
      </section>

      {/* Render Forms component */}
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
