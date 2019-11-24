import React from 'react';

const MyParties = (props) => {

    return (
        <div className="container-my-parties">
                <div className="party-list">
                    <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div>
                </div>
                <div className="party-list">
                    <h3>Created Parties</h3>
                    <div>A bunch of parties I created.</div>
                </div>
        </div>
    );
};

export default MyParties;