import React from 'react';
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
                <button className="pl-edit-button">Edit</button>
            </div>
            {/* <div className="pl-date-time-location">
                <p>props.Date of Party</p>
                <p className="pl-time">props.Start Time until props.End Time</p>
                <p className="pl-location">props.Location</p>
            // </div> */}
             {/* <div className="pl-description">props.Description</div> */}
            
            <div className="pl-guest-info  ">
                <div className="pl-gst-list">

                    <GuestList />
                </div>
                <div className="pl-link-to-form">

                    <Link to='/guestListForm' id="pl-guest-link">
                        <button className="pl-add-guest-button">Add to Guest List</button>
                    </Link>
                </div>
            </div>
            
            <div className="pl-lists">

                <div className="pl-item-list">
                    <h3 className="item-list-title">Items Needed List</h3>
                    <div className="pl-item-list-div">

                        <ItemList />
                    </div>
                    <div className="pl-add-items-link">

                        <Link to='/itemForm' id="pl-item-link">
                            <button className="pl-add-items-button">Add Items to List</button>
                        </Link>
                    </div>
                </div>
                <div className="pl-acct-for-list"> 
                    <div className="pl-acct-for">
                        
                        <AccountedForList />  
                    </div>
                    <div classname="pl-acct-for-link">
                    <div className="pl-fix-link-div">

                        <Link to='/accountedForForm' id="af-link">
                            <button className="pl-add-acct-for-button">Add Items Accounted For</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        
        
    );
}



