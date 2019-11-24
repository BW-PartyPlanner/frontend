import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';
import ItemList from '../Items/ItemList';
/*

This component is connected to the redux store
and by doing so now we have access to the redux's store via props.state
after mapStateToProps


since the party object is only present in the store's object after posting a party
successfuly to the back end after creating it in the form,
with the following line of code I am conditionaly checking
the redux's store to see if the party object is present, if it is not , a placeholder 
string is rendered instead

{props.state.partyReducer.party ? `hello${props.state.partyReducer.party.party.name}` : "Party's Name"}

*/
function PotLuckParty(props) {

    
    return (
        <div className="pl-pot-luck-party">
            <div className="pl-name-div">
                    <h1 className="pl-pot-luck-name">
                        {props.state.partyReducer.party ? `hello${props.state.partyReducer.party.party.name}` : "Party's Name"}
                    </h1>
                <div className="pl-guest-num">props.Number of Guests</div>
            </div>
            <div className="pl-date-time-location">
                 <h3>Date of Party</h3>
                 <p className="pl-time">{props.state.partyReducer.party ? `${props.state.partyReducer.party.party.date}`: "date not available"}</p>
            </div>
            <button className="pl-edit-button">Edit</button>
            
            <div className="pl-guest-info  ">
                <div className="pl-gst-list">

                    <GuestList />
                </div>
                <div className="pl-link-to-form">

                    <Link to='/guestListForm'>
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

                        <Link to='/itemForm'>
                            <button className="pl-add-items-button">Add Items to List</button>
                        </Link>
                    </div>
                </div>
                <div className="pl-acct-for-list"> 
                    <div className="pl-acct-for">

                        <AccountedForList />  
                    </div>
                    <div classname="pl-acct-for-link">

                        <Link to='/accountedForForm'>
                            <button className="pl-add-acct-for-button">Add Items Accounted For</button>
                        </Link>
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



