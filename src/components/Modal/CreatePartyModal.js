import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

export default function CreatePartyModal()  {
    return (

        <div className='modalWrapper'>
            <Popup trigger={<button className="modal-button">Create Party</button>} position="center center">

                <div className='modalContainer'>
                    <p>Please choose which type of party you would like to create.</p>
                    <Link to="/hostedform" className='modalLink'>
                        <button className='modalBtn'>Hosted Party</button>
                    </Link>
                    <p> - OR - </p>
                    <Link to="/potluckform" className='modalLink'>
                        <button className='modalBtn'>Pot Luck Party</button>
                    </Link>
                </div>

            </Popup>
           
        </div>
    );
}