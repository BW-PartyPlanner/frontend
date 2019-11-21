import React from 'react';
import { Link } from 'react-router-dom';
import { setLoggedIn } from '../store/actions/loginActions'
import { connect } from 'react-redux';

const Navigation = ({ setLoggedIn, signedIn }) => {
    
    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('message')
        setLoggedIn()
    }

    return (
        <div className="Nav">
            <div className="Logo">
                Logo
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

const mapStateToProps = state => ({
  signedIn: state.loginReducer.isLoggedIn 
})

export default connect(mapStateToProps, { setLoggedIn })(Navigation);