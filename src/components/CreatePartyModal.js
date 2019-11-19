import React from 'react';
import Popup from 'reactjs-popup';

export default function CreatePartyModal()  {
    return (
    <Popup trigger={<button>Create Party</button>} positiom="center center">
        <div>
            <p>Please choose which type of party you would like to create.</p>
            <button>Hosted Party</button>
            <button>Pot Luck Party</button>
        </div>
    </Popup>
    );
}