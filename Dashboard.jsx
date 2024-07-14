import React, { useState } from 'react';
import './Dashboard.css';

// Menu component for displaying navigation buttons
const Menu = ({ onSelect }) => {
    return (
        <div className="menu">
            <button onClick={() => onSelect('profile')}>Profile</button>
            <button onClick={() => onSelect('communityFeed')}>Community Feed</button>
            <button onClick={() => onSelect('mapCalendar')}>Map/Calendar</button>
            <button onClick={() => onSelect('safety')}>Safety</button>
            <button onClick={() => onSelect('notebook')}>Notebook</button>
        </div>
    );
};

// Form component for submitting invite codes
const InviteCodeForm = ({ handleInviteCodeSubmit }) => {
    const [inviteCode, setInviteCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInviteCodeSubmit(inviteCode);
        setInviteCode('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter invite code"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

//placeholder for newsfeed content 
const NewsFeed = () => {
    return <div>News Feed Content</div>;
};

// Community Feed content
const CommunityFeed = ({ handleInviteCodeSubmit }) => {
    return (
        <div>
            <div>Community Feed Content</div>
            <NewsFeed />
            <InviteCodeForm handleInviteCodeSubmit={handleInviteCodeSubmit} />
            {/* Add other community feed features here */}
        </div>
    );
};

//  Profile content
const Profile = ({ user, users }) => {
    return (
        <div className="profile">
            <h2>Profile</h2>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
            <p>Date of Birth: {user.dob}</p>
            <p>Gender: {user.gender}</p>
            <p>Role: {user.role}</p>
            {user.role === 'Provider' && <p>License Number: {user.licenseNumber}</p>}
            {user.role === 'Pregnant' && <p>Weeks Pregnant: {user.weeksPregnant}</p>}
            <p>Invite Code: {user.inviteCode}</p>
        </div>
    );
};

const MapCalendar = () => {
    return <div>Map/Calendar Content</div>;
};

const Safety = () => {
    return <div>Safety Content</div>;
};

const Notebook = () => {
    return <div>Notebook Content</div>;
};

// Main layout component for displaying selected content area
const DashboardLayout = ({ user, users, setUsers }) => {
    const [selectedSection, setSelectedSection] = useState('communityFeed');

    const handleInviteCodeSubmit = (inviteCode) => {
        console.log('Before handling invite submission:');
        console.log(`User ${user.username} has ${user.connections.length} connections.`);
        console.log('Received invite code:', inviteCode);
        const invitedUser = users.find(user => user.inviteCode === inviteCode.trim());
        console.log('Invited user details:', invitedUser);
        if (invitedUser) {
            // Notify the invited user
            alert(`${invitedUser.firstname} has been notified of your connection request.`);
            // Logic to notify the user and handle acceptance

            //invited user and inviter user get added to each other's connections 
            invitedUser.connections.push(user.username);
            user.connections.push(invitedUser.username);

            setUsers([...users]);
            console.log('After handling invite submission:');
            console.log(`User ${user.username} now has ${user.connections.length} connections.`);
            console.log(`Invited user ${invitedUser.username} now has ${invitedUser.connections.length} connections.`);

        } else {
            alert('Invalid invite code.');
        }
    };

    // Function to render content based on selected section
    const renderContent = () => {
        switch (selectedSection) {
            case 'profile':
                return <Profile user={user} />;
            case 'communityFeed':
                return <CommunityFeed handleInviteCodeSubmit={handleInviteCodeSubmit} />;
            case 'mapCalendar':
                return <MapCalendar />;
            case 'safety':
                return <Safety />;
            case 'notebook':
                return <Notebook />;
            default:
                return <CommunityFeed handleInviteCodeSubmit={handleInviteCodeSubmit} />;
        }
    };

    return (
        <div className="dashboard-layout">
            <Menu onSelect={setSelectedSection} />
            <div className="content-area">
                {renderContent()}
            </div>
        </div>
    );
};


const Dashboards = ({ user, users, handleInviteCodeSubmit, setUsers }) => {
    return <DashboardLayout user={user} handleInviteCodeSubmit={handleInviteCodeSubmit} users={users} setUsers={setUsers} />;
};

export { Dashboards };
