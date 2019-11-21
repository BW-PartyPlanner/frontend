import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

export default function CreatePartyModal()  {
    return (
        <div>
            <Popup trigger={<button>Create Party</button>} position="right center">
                <div>
                    <p>Please choose which type of party you would like to create.</p>
                    <Link to="/hostedForm">
                        <button>Hosted Party</button>
                    </Link>
                    <Link to="/potLuckForm">
                        <button>Pot Luck Party</button>
                    </Link>

                    </div>
                </Popup>
           

        </div>
    );
}