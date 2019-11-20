import React from 'react';
import { Link, Route } from 'react-router-dom'
import { userInfo } from 'os';
// import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <h2>Hello, 'User'</h2>
            <button>
                <Link to="/home">
                    Create Party
                </Link>
            </button>
            <div className="container-options">
                <div className="option">My Parties</div>
                <div className="option">Friends List</div>
                <div className="option">Invitations</div>
            </div>
            <div className="container-rsvps-and-parties"> 
                <div className="party-list">
                    <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div>
                </div>
                <div className="party-list">
                    <h3>Created Parties</h3>
                    <div>A bunch of parties I created.</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;