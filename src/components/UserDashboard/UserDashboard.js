import React, { useEffect, useState } from 'react';
import CreatePartyModal from '../Modal/CreatePartyModal';
import { NavLink, Route } from 'react-router-dom';
import FriendsList from '../FriendsList/FriendsList';
import LoginForm from '../LoginForm/LoginForm';
import MyParties from '../MyParties/MyParties';
import DashboardHome from '../DashboardHome/DashboardHome';

const Dashboard = (props) => {
    const welcome = localStorage.getItem('message')
    const [welcomeMessage, setWelcomeMessage] = useState(welcome)

    useEffect(() => {
        setWelcomeMessage(welcomeMessage)
    }, [welcomeMessage])

    return (
        <div className="dashboardWrapper">
            <div className="container-dashboard">
                <h2>{welcomeMessage ? welcomeMessage : 'Welcome to the Party!'}</h2>
                <CreatePartyModal />
                <div className="container-options">
                    <NavLink to='/dashboard/myparties' className='option'>My Parties</NavLink>
                    <NavLink to='/dashboard/friends' className='option'>Friends List</NavLink>
                    <NavLink to='/dashboard/invitations' className='option'>Invitations</NavLink>
                </div>
                <div className="container-dashboard-lower-part">
                    <Route exact path='/dashboard' component={DashboardHome} />
                    <Route path='/dashboard/friends' component={FriendsList} />
                    <Route path='/dashboard/invitations' component={LoginForm} />
                    <Route path='/dashboard/myparties' component={MyParties} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;