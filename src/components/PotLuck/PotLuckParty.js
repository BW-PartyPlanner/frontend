import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';
import ItemList from '../Items/ItemList';

 


export default function PotLuckParty() {
    
    

    return (
        <div className="pl-pot-luck-party">
            <div className="pl-name-div">
                <h1 className="pl-pot-luck-name">Name of Party</h1>
                {/* <h2>props.Theme of Party</h2>
                <div className="pl-guest-num">props.Number of Guests</div> */}
            </div>
            {/* <div className="pl-date-time-location">
                <p>props.Date of Party</p>
                <p className="pl-time">props.Start Time until props.End Time</p>
                <p className="pl-location">props.Location</p>
            // </div> */}
             {/* <div className="pl-description">props.Description</div> */}
            <button className="pl-edit-button">Edit</button>
            
            <div className="pl-guest-info  ">
                <div className="pl-gst-list">

                    <GuestList />
                </div>
                <div className="pl-link-to-form">

                    <Link to='/guestListForm'>
                        <button className="pl-add-guest-button">Add to Guest List</button>
                    </Link>
                </div>
            </div>
            
            <div className="pl-lists">

                <div className="pl-item-list">
                    <ItemList />
                    <Link to='/itemForm'>
                        <button>Add Items to List</button>
                    </Link>
                </div>
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



