import React from 'react';
import { Link } from 'react-router-dom';
import GuestList from '../GuestList/GuestList';
import ItemList from '../Items/ItemList';
import AccountedForList from '../AccountedFor/AccountForList';

export default function HostedParty(props) {

    return (
        <div className="hp-wrapper">
            <div className="hp-container">
                <div className="hp-name">

                    <h1 className="hp-party-name">Name of Party</h1>
                    <button className="hp-edit-button">Edit</button>
                </div>

                
            
                <div className="hp-guest-list">
                    <div className="hp-gst-list">

                        <GuestList />
                    </div>
                    <div className="hp-link-gst-list">

                        <Link to="/guestListForm" id="hp-guest-link">
                            <button className="hp-gst-list-button">Add Guests</button>
                        </Link>
                    </div>
                </div>
                <div className="hp-budget">
                    
                    <div className="hp-bdgt">Budget</div>
                    <div className="hp-rem-bdgt">Remaining Budget</div>
                </div>
                <div className="hp-items-list">

                    <h3 className="hp-item-list-title">Items Needed List</h3>
                    <div className="hp-item-list-div">

                        <ItemList />
                    </div>
                    <div className="hp-add-item-link">
                        <Link to='/itemForm' id="hp-item-link">
                            <button className="hp-add-items-button">Add Items to List</button>
                        </Link>
                    </div>
                </div>
                <div className="hp-acct-for-list">
                    <div className="hp-acct-list">

                        <AccountedForList />
                    </div>
                <div className="hp-acct-for-link">
                    <Link to='/accountedForForm' id="hp-af-link">
                        <button className="hp-acct-for-button">Add Items Accounted For</button>
                    </Link>
                </div>
                </div>
                
            </div>

         </div>
    );
}