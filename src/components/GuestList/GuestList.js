import React, { useState, useEffect } from 'react';


export default function GuestList() {
    const [guests, setGuests] = useState([])

    useEffect(() => {

    },[guests]);

    return (
        <div className="gl-guest-list">
            GuestList from guest list form 
        </div>
    );
}

