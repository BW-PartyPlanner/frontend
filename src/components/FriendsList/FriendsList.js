import React from 'react';

const FriendsList = () => {
    const FriendsList = [
        'Bobby',
        'Reggie',
        'Timmy',
        'Wendy',
        'Tommy',
        'Tammy'
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