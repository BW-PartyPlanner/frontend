import React, { useEffect, useState } from 'react';
import CreatePartyModal from '../Modal/CreatePartyModal';
import { NavLink, Route } from 'react-router-dom';
import ItemList from '../Items/ItemList';
import LoginForm from '../LoginForm/LoginForm';

const Dashboard = (props) => {
    const welcome = localStorage.getItem('message')
    const [welcomeMessage, setWelcomeMessage] = useState(welcome)

    useEffect(() => {
        setWelcomeMessage(welcomeMessage)
    }, [welcomeMessage])

    return (
        <div className="container-dashboard">
            <h2>{welcomeMessage ? welcomeMessage : 'Welcome to the Party!'}</h2>
            <CreatePartyModal />
            <div className="container-options">
                <div className="option">My Parties</div>
                <NavLink to='/dashboard/friends'>
                    {/* <div className="option">
                        Friends List
                    </div> */}
                    Friends List
                </NavLink>
                <NavLink to='/dashboard/invitations'>
                <div className="option">Invitations</div>
                </NavLink>
                
            </div>
            <div className="container-rsvps-and-parties"> 
                <div className="party-list">
                    {/* <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div> */}
                    <Route path='/dashboard/friends' component={ItemList} />
                    <Route path='/dashboard/invitations' component={LoginForm} />
                </div>
                {/* <div className="party-list">
                    <h3>Created Parties</h3>
                    <div>A bunch of parties I created.</div>
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;