import React, { useState, useEffect } from 'react';


export default function GuestList() {
    const [guests, setGuests] = useState([]);

    useEffect(() => {

    },[guests]);

    return (
        <div classname="gl-list-container">
            <h2 classname="gl-list-title">Guest List</h2>
            <div className="gl-guest-list">
                GuestList from guest list form 
            </div>
        </div>
    );
}

