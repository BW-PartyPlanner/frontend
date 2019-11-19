import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Navigation = () => {
    return (
        <div className="Nav">
            <div className="Logo">
                Logo
            </div>
            <div className="NavLinks">
                <Link to="/home">
                    Home
                </Link>
                <Link to="/signup">
                    Sign Up
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/profile">
                    Profile
                </Link>
            </div>
            <Route exact path='/signup' component={SignUpForm} />
            <Route exact path='/login' component={LoginForm} />
        </div>
    );
};

export default Navigation;