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


const CommunityFeed = ({ selectedRole }) => {
    return (
        <div className="community-section">
            {/* Left Side - Chatbox and Connections */}
            <div className="left-side">
                <div className="chatbox">
                    <h3>Chatbox</h3>
                    <div className="connections-panel">
                        {/* Placeholder for connections (circles)? */}
                        <h4>Connections</h4>
                        {/* Add connections here */}
                        <div className="connection-circle"></div>
                        <div className="connection-circle"></div>
                        <div className="connection-circle"></div>
                    </div>
                </div>
            </div>

            {/* Right Side - Fetal Development / Directory and Alerts/News */}
            <div className="right-side">
                {/* Top Container */}
                <div className="top-container">
                    {selectedRole === 'pregnant' ? (
                        <>
                            <h3>Fetal Development</h3>
                            {/* Placeholder for fetal development information */}
                        </>
                    ) : (
                        <>
                            <h3>Directory</h3>
                            {/* Placeholder for directory of connections/circles */}
                        </>
                    )}
                </div>

                {/* Bottom Container */}
                <div className="bottom-container">
                    <h3>Alerts/News</h3>
                    {/* Placeholder for alerts/news */}
                </div>
            </div>
        </div>
    );
};

//  Profile content
const Profile = ({ user, users, handleInviteCodeSubmit }) => {
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
            <InviteCodeForm handleInviteCodeSubmit={handleInviteCodeSubmit} />
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
const DashboardLayout = ({ user, users, setUsers, selectedRole }) => {
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
                return <Profile user={user} handleInviteCodeSubmit={handleInviteCodeSubmit} />;
            case 'communityFeed':
                return <CommunityFeed selectedRole={selectedRole} />;
            case 'mapCalendar':
                return <MapCalendar />;
            case 'safety':
                return <Safety />;
            case 'notebook':
                return <Notebook />;
            default:
                return <CommunityFeed />;
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


const Dashboards = ({ user, users, handleInviteCodeSubmit, setUsers, selectedRole }) => {
    return <DashboardLayout user={user} handleInviteCodeSubmit={handleInviteCodeSubmit} users={users} setUsers={setUsers} selectedRole={selectedRole} />;
};

export { Dashboards };
