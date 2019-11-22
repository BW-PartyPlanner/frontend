import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import GuestList from '../Guests/GuestList';
=======
import GuestListForm from '../GuestList/GuestListForm';

>>>>>>> 2788c4f99c44a90dba22db976986ed74678393da

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
            <div>
                <GuestList />
                <Link to="/guestListForm">
                    <button>Add Guests</button>
                </Link>
            </div>
            <div>props.Budget</div>
            <div>props.Remaining Budget</div>
            <div>props.Items/Food Needed</div>

         </div>
    );
}