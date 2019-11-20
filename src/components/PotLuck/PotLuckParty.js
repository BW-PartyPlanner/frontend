import React, { useState } from 'react';

import GuestList from '../GuestList';
import AccountedForList from '../AccountForList';




export default function PotLuckParty() {
    
    

    return (
        <div className="pl-pot-luck-party">
            <div className="pl-name-div">
                <h1 className="pl-pot-luck-name">props.Name of Party</h1>
                <h2>props.Theme of Party</h2>
            </div>
            <div className="pl-date-time-location">
                <p>props.Date of Party</p>
                <p className="pl-time">props.Start Time until props.End Time</p>
                <p className="pl-location">props.Location</p>
            </div>
            <div className="pl-description">props.Description</div>
            <button className="pl-edit-button">Edit</button>
            
            <div>props.Number of Guests</div>
            
            
            <GuestList />
            <div>props.Items/Food Needed</div>
            <AccountedForList />
        </div>
        
        
    );
}