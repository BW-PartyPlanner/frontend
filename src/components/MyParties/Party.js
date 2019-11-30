import React from 'react';
import {Link } from 'react-router-dom';

const Party = (props) => {

console.log(props, "from party");
    return (
    <div className="rendered-parties">
        {props.parties.map((party) =>
         <div className="party-link">
            <Link to={{pathname: "/PotLuckParty", state:{id: party.id}}}>{party.name}</Link>
            
             
        </div> )}
    </div>
    )



}


export default Party;