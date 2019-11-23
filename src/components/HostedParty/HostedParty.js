import React from 'react';
import { Link } from 'react-router-dom';
import GuestList from '../GuestList/GuestList';

export default function HostedParty(props) {

    return (
        <div className="Pot-Luck-Party">
            <h1>props.Name of Party</h1>
            
            
            
            <button>Edit</button>
            
          
            <div>
                <GuestList />
                <Link to="/guestListForm">
                    <button>Add Guests</button>
                </Link>
            </div>
            <div>props.Budget</div>
            <div>props.Remaining Budget</div>
            <div>props.Items/Food Needed</div>
            <div>items accounted for</div>

         </div>
    );
}