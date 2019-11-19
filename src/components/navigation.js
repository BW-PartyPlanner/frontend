import React from 'react';
import { Link } from 'react-router-dom'

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
        </div>
    );
};

export default Navigation;