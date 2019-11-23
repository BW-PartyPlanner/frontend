import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

const Navigation = () => {
    const signedIn = localStorage.getItem('token')
    
    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('message')
        localStorage.removeItem('username')
    }

    return (
        <div className="Nav">
            <div className="Logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="NavLinks">
                {!signedIn && <Link to="/signup">
                    Sign Up
                </Link>}
                {!signedIn && <Link to="/login">
                    Login
                </Link>}
                {signedIn && <Link to="/dashboard">
                    Dashboard
                </Link>}
                {signedIn && <Link to="/login" onClick={() => signOut()}>
                    Logout
                </Link>}
            </div>
        </div>
    );
};

export default Navigation;