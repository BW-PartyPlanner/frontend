import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { getToken } from '../utils/axiosUtils';

const Navigation = () => {
    const signedIn = getToken()

    return (
        <div className="Nav">
            <div className="Logo">
                Logo
            </div>
            <div className="NavLinks">
                <Link to="/home">
                    Home
                </Link>
                {!signedIn && <Link to="/signup">
                    Sign Up
                </Link>}
                {!signedIn && <Link to="/login">
                    Login
                </Link>}
                {signedIn && <Link to="/profile">
                    Profile
                </Link>}
                {signedIn && <Link to="/login" onClick={() => {localStorage.removeItem('token')}}>
                    Logout
                </Link>}
            </div>
            <Route exact path='/signup' component={SignUpForm} />
            <Route exact path='/login' component={LoginForm} />
        </div>
    );
};

export default Navigation;