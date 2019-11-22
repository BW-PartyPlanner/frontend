import React,  {useState, useEffect } from 'react';


export default function AccountedForList() {
    const [acctFor, setAcctFor] = useState([]);

    useEffect(() => {

    },[acctFor]);

    return (
        <div className="af-list-container">

            <h2 className="af-list-title">Items Accounted For</h2>
            <div className="af-list">
                List from Accounted For List
            </div>
        </div>
    );
}