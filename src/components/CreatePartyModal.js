import React from 'react';
import Popup from 'reactjs-popup';
import {Link, Route } from 'react-router-dom';

import HostedForm from './HostedForm';
import PotLuckForm from './PotLuck/PotLuckForm';

export default function CreatePartyModal()  {
    return (
        <div>
            <div>
                
           
                <Popup trigger={<button>Create Party</button>} positiom="center center">
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
          
                <Route exact path='/hostedForm' component={HostedForm} />
                <Route exact path='/potLuckForm' component={PotLuckForm} />
          
              
        </div>
    );
}