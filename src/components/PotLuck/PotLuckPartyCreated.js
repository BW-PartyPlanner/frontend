import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';
import ItemList from '../Items/ItemList';

import {getPartyById} from '../../store/actions/partyActions'
import PartyInfo from './PartyInfo'
import PartyInfoForm from './PartyInfoForm'

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
function PotLuckPartyCreated(props) {
 
    const [edit, setEdit] = useState(false);
    useEffect(() => getParty(), )
    

    function getParty(){
        props.getPartyById(localStorage.getItem('lastItemId'))
       
    }

    function editParty(e){
        e.preventDefault();
        setEdit(true);
    }

    function updated(){
        setEdit(false);
     
    }
  
  
   
    return (
        <div className="pl-wrapper">

            <div className="pl-pot-luck-party">
                <div className="pl-container">
                {edit ? <PartyInfoForm updated={updated}/> : <PartyInfo editParty={editParty}/>}
              
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

                                <AccountedForList  />  
                            </div>
                            <div className="pl-acct-for-link">

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

export default connect(mapStateToProps,{getPartyById})(PotLuckPartyCreated)



