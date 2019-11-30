import React, { useState, useEffect } from 'react';


export default function GuestList() {
    const [guests] = useState([]);

    useEffect(() => {

    },[guests]);

    return (
        <div className="gl-list-container">
            <h2 className="gl-list-title">Guest List</h2>
            <div className="gl-guest-list">
                GuestList from guest list form 
            </div>
        </div>
    );
}