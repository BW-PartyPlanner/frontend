import React , {useEffect, useState, useReducer} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GuestList from '../GuestList/GuestList';
import AccountedForList from '../AccountedFor/AccountForList';
import ItemList from '../Items/ItemList';
import {getPartyById} from '../../store/actions/partyActions';
import { ItemContext } from '../../contexts/ItemContext';
import { initialState, reducer } from '../../store/reducers/itemReducer';
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
function PotLuckParty(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [edit, setEdit] = useState(false);
    const {id} = props.location.state;
    console.log(props.location.state)
    console.log(props.history)
    console.log(edit)
    

    useEffect(() => getParty(), [])
    
    function getParty(){
        props.getPartyById(id) 
    }

    function editParty(e){
        setEdit(true);
    }

    function updated(){
        setEdit(false);
    }

    useEffect(() => props.getPartyById(id), [id])
   
    return (

        <div className="pl-wrapper">
            <div className="pl-container" >
            {edit ? <PartyInfoForm updated={updated} id={id} /> : <PartyInfo editParty={editParty} id={id} />}
               
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
                            <ItemContext.Provider value={{state, dispatch}}>
                                <ItemList id={id}/>
                            </ItemContext.Provider>
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
                        <div className="pl-acct-for-link">
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

export default connect(mapStateToProps,{getPartyById})(PotLuckParty)