import React, { useState } from 'react';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleSignUpClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
  };

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
      <section id="section1">
        <header>Welcome</header>
        <p>Hello world for now!</p>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
      </section>

      {/* Login Form */}
      {showLoginForm && (
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" name="login-username" required />

            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" required />

            <button type="submit">Login</button>
            <p>Don't have an account? <button onClick={handleToggleForm}>Sign Up</button></p>
          </form>
        </div>
      )}

      {/* Sign Up Form */}
      {showSignUpForm && (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="signup-username">Username:</label>
            <input type="text" id="signup-username" name="signup-username" required />

            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="signup-password" required />

            <button type="submit">Sign Up</button>
            <p>Already have an account? <button onClick={handleToggleForm}>Login</button></p>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
