import React, { useEffect, useState } from 'react';
import CreatePartyModal from '../Modal/CreatePartyModal';
import { NavLink, Route } from 'react-router-dom';
import ItemList from '../Items/ItemList';
import LoginForm from '../LoginForm/LoginForm';

const MyParties = (props) => {
    const welcome = localStorage.getItem('message')
    const [welcomeMessage, setWelcomeMessage] = useState(welcome)

    useEffect(() => {
        setWelcomeMessage(welcomeMessage)
    }, [welcomeMessage])

    return (
        <div className="container-my-parties">
                <div className="party-list">
                    <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div>
                </div>
                <div className="party-list">
                    <h3>Created Parties</h3>
                    <div>A bunch of parties I created.</div>
                </div>
        </div>
    );
};

export default MyParties;