import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import sampleUsers from './SampleUsers';
import { Dashboards } from './Dashboard.jsx';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showRoleForm, setShowRoleForm] = useState(false);

    //const [users, setUsers] = useState([]);
    const [users, setUsers] = useState([...sampleUsers])
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedProfession, setSelectedProfession] = useState('');


    const handleLoginClick = () => {
        console.log('Initial sampleUsers invite codes:', sampleUsers.map(user => user.inviteCode));
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
        if (users.length >= 4) {
            alert('User limit reached. No more sign-ups allowed.');
            return;
        }
        const newUser = {
            id: users.length + 1,
            firstname: e.target['signup-firstname'].value,
            middlename: e.target['signup-middlename'].value,
            lastname: e.target['signup-surname'].value,
            dob: e.target['signup-dob'].value,
            gender: e.target['signup-gender'].value,
            country: e.target['signup-country'].value,
            email: e.target['signup-email'].value,
            phone: e.target['signup-phone'].value,
            username: e.target['signup-username'].value,
            password: e.target['signup-password'].value,
            role: null,
            isLoggedIn: true,
            dashboard: '',
            inviteCode: generateInviteCode(),
            connections: [],
            circles: [],
            pendingInvitations: [],
        };

        setUsers([...users, newUser]);
        setShowSignUpForm(false);
        setShowRoleForm(true);
        setIsLoggedIn(true);
    };

    //Circle creation code below: 

    //generates a random invite code that's set for the user so they can add other users as connections later 
    const generateInviteCode = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const createCircle = (user, circleName, members) => {
        const newCircle = {
            name: circleName,
            members
        };
        user.circles.push(newCircle);
        setUsers([...users]); // Update users state
    };

    const handleCircleCreation = (circleName, members) => {
        const currentUser = users.find(user => user.isLoggedIn);
        createCircle(currentUser, circleName, members);
    };

    //End circle creation code stuff 

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const username = e.target['login-username'].value;
        const password = e.target['login-password'].value;
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful');
            setIsLoggedIn(true);
            user.isLoggedIn = true;
        } else {
            alert('Invalid username or password');
        }
        setShowLoginForm(false);

    };

    //avoids some potential bugs that could come up when user is selecting their role just in case 
    const handleRoleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'role') {
            setSelectedRole(value);
            // Reset profession if the role is not 'provider'
            if (value !== 'provider') {
                setSelectedProfession('');
            }
        } else if (name === 'profession') {
            setSelectedProfession(value);
        }
    };

    const handleRoleFormSubmit = (e) => {
        e.preventDefault();

        // Assuming new users are added at the end of the users array
        const newUserIndex = users.length - 1; // Index of the new user
        const newUser = users[newUserIndex]; // Fetch the new user object

        // Update the role and additional details for the new user
        const updatedUsers = [...users];
        updatedUsers[newUserIndex] = {
            ...newUser,
            role: selectedRole,
            weeksPregnant: selectedRole === 'pregnant' ? e.target['weeks'].value : null,
            profession: selectedRole === 'provider' ? e.target['profession'].value : null,
            licenseNumber: selectedRole === 'provider' ? e.target['license'].value : null,
        };

        setUsers(updatedUsers);
        alert(`Role: ${selectedRole}, Profession: ${selectedProfession}`);
        setShowRoleForm(false);

    };

    // Assuming a function to check user roles
    const getCurrentUser = () => {
        return users.find(user => user.isLoggedIn);
    };

    const currentUser = getCurrentUser();

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


            {currentUser && currentUser.role ? (
                <Dashboards users={users} key={currentUser.id} user={currentUser} />
            ) : null}


            <Forms users={users} setUsers={setUsers} setIsLoggedIn={setIsLoggedIn}
                showLoginForm={showLoginForm}
                showSignUpForm={showSignUpForm}
                showRoleForm={showRoleForm}
                selectedRole={selectedRole}
                handleToggleForm={handleToggleForm}
                handleRoleChange={handleRoleChange}
                handleRoleFormSubmit={handleRoleFormSubmit}
                handleSignupFormSubmit={handleSignupFormSubmit}
                handleLoginSubmit={handleLoginSubmit}

            />

            {/*<Dashboards user={currentUser} users={users} />*/}

            {/* code to test registered users */}
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.firstname} {user.lastname} - {user.username} {user.inviteCode}
                        {user.isLoggedIn ? " (Logged In)" : " (Not Logged In)"}
                        {currentUser?.role ? `${currentUser.role}!` : "no role!"}
                        {currentUser?.inviteCode ? `${currentUser.inviteCode}!` : "no code!"}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default App;
