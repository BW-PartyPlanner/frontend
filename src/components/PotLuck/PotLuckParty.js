import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';

 


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
            
            <div className="pl-guest-info  ">props.Number of Guests
                <GuestList />

            </div>
                <Link to='/guestListForm'>
                    <button>Add to Guest List</button>
                </Link>
            
            <div className="pl-lists">

                <div className="pl-item-list">props.Items/Food Needed</div>
                <div className="pl-acct-for-list"> 
                    <AccountedForList />  
                    <Link to='/accountedForForm'>
                        <button>Add Items Accounted For</button>
                    </Link>
                </div>
            </div>

        </div>
        
        
    );
}



