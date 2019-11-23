import React, { useEffect, useState } from 'react';
// import CreatePartyModal from '../Modal/CreatePartyModal';
// import { axiosWithAuth as axios } from '../../utils/axiosUtils';
// import { Route } from 'react-router-dom';
// import LoginForm from '../LoginForm/LoginForm';

const FriendsList = () => {
    const FriendsList = [
        'bobby',
        'sally',
        'timmy',
        'wendy',
        'tommy',
        'tammy'
    ]

    const FriendsLineItems = FriendsList.map( 
        (item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        }
    )

    return (
            <div className='friends-list'>{FriendsLineItems}</div>
        
    );
};

export default FriendsList;