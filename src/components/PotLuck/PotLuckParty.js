import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';
import ItemList from '../Items/ItemList';


function PotLuckParty(props) {

    
    return (
        <div className="pl-wrapper">
            <div className="pl-container" >

                <div className="pl-name-div">

                    <h1 className="pl-pot-luck-name">
                        {props.state.partyReducer.party ? `hello${props.state.partyReducer.party.party.name}` : "Party's Name"}
                    </h1>
                    <h2 className="pl-guest-num">Number of Guests</h2>
                    <h3 className="pl-date">Date of Party</h3>
                    <p className="pl-time">{props.state.partyReducer.party ? `${props.state.partyReducer.party.party.date}`: "date not available"}</p>

                    <button className="pl-edit-button">Edit</button>
                </div>
               
                <div className="pl-guest-info  ">
                    <div className="pl-gst-list">

                        <GuestList />
                    </div>
                    <div className="pl-link-to-form">

                        <Link to='/guestListForm' id="pl-guest-link">
                            <button className="pl-add-guest-button">Add to Guest List</button>
                        </Link>
                    </div>
                </div>
                
                
                
                <div className="pl-lists">

                    <div className="pl-item-list">
                        <h3 className="item-list-title">Items Needed List</h3>
                        <div className="pl-item-list-div">

                            <ItemList />
                        </div>
                        <div className="pl-add-items-link">

                            <Link to='/itemForm' id="pl-item-link">
                                <button className="pl-add-items-button">Add Items to List</button>
                            </Link>
                        </div>
                    </div>
                    <div className="pl-acct-for-list"> 
                        <div className="pl-acct-for">
                            
                            <AccountedForList />  
                        </div>
                        <div classname="pl-acct-for-link">
                        <div className="pl-fix-link-div">

                            <Link to='/accountedForForm' id="af-link">
                                <button className="pl-add-acct-for-button">Add Items Accounted For</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

const mapStateToProps = function(state) {
  
    return {state: state}
    
}

export default connect(mapStateToProps)(PotLuckParty)



