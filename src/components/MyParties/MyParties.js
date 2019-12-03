import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getParties} from '../../store/actions/partyActions';
import Party from  './Party';

const MyParties = (props) => {

    useEffect(() => {
      props.getParties()
    }, [])

    return (
        <div className="container-my-parties">
            <div className="party-list">
                <h3>RSVP's</h3>
                <div>A bunch of parties I have RSVP'd to.</div>
            </div>
            <div className="party-list">
                <h3>Created Parties</h3>
                <div>A bunch of parties I created.</div>
                {props.state.partyReducer.parties ? <Party parties={props.state.partyReducer.parties}/>: "not it is not"}
            </div>
        </div>
    );
};

function mapState(state){
    return {
        state: state
    }
}

export default connect(mapState, {getParties})(MyParties);