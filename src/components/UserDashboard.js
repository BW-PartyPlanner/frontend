import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom'
import CreatePartyModal from './CreatePartyModal';
import { axiosWithAuth as axios } from '../utils/axiosUtils';

const Dashboard = (props) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        username: ''
    })

    useEffect(() => {
        axios()
            .get(`/users/`)
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err, 'User not found.')
            })
    }, [])

    console.log(props)

    useEffect(() => {
        axios()
            .get(`/users/${props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err, 'User not found.')
            })
    }, [props.match.params.id])

    return (
        <div className="container-dashboard">
            <h2 key={user.id}>Hello, {user.username}</h2>
            <CreatePartyModal />
            {/* <button>
                <Link to="/home">
                    Create Party
                </Link>
            </button> */}
            <div className="container-options">
                <div className="option">My Parties</div>
                <div className="option">Friends List</div>
                <div className="option">Invitations</div>
            </div>
            <div className="container-rsvps-and-parties"> 
                <div className="party-list">
                    <h3>RSVP's</h3>
                    <div>A bunch of parties I have RSVP'd to.</div>
                </div>
                <div className="party-list">
                    <h3>Created Parties</h3>
                    <div>A bunch of parties I created.</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;