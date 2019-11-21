import React from 'react';
import GuestListForm from '../Guests/GuestListForm';


export default function HostedParty(props) {


    return (
        <div className="Pot-Luck-Party">
            <h1>props.Name of Party</h1>
            <h2>props.Theme of Party</h2>
            <div>
                <p>props.Date of Party</p>
                <p>props.Start Time until props.End Time</p>
                <p>props.Location</p>
            </div>
            <div>props.Description</div>
            <button>Edit</button>
            
            <div>props.Number of Guests</div>
            <GuestListForm />
            <div>props.Budget</div>
            <div>props.Remaining Budget</div>
            <div>props.Items/Food Needed</div>

         </div>
    );
}