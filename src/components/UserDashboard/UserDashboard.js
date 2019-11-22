import React, { useEffect, useState } from 'react';
import CreatePartyModal from '../Modal/CreatePartyModal';
import { axiosWithAuth as axios } from '../../utils/axiosUtils';
import { Route, NavLink} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import FriendsLineItems from '../FriendsList/FriendsList';

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
                <div className="option" onClick={console.log("test")}>Friends List</div>
                <div className="option">Invitations</div>
                {/* <NavLink to='/dashboard/FriendsLineItems'/> */}
            </div>
            <div className="container-rsvps-and-parties"> 
                <Route path='/dashboard/friends' component={LoginForm} />
                <div className="party-list">
                    <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div>
                    {/* <ul><FriendsLineItems/></ul> */}
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


// const FriendsList = [
//     'bobby',
//     'sally',
//     'timmy',
//     'wendy',
//     'tommy',
//     'tammy'
// ]

// const FriendsLineItems = FriendsList.map( 
//     (item) => {
//         return (
//             <li>{item}</li>
//         )
//     }
// )
