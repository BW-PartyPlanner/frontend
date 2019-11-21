import React from 'react';
import { Link } from 'react-router-dom';
import { setLoggedIn } from '../../store/actions/loginActions'
import { connect } from 'react-redux';
import Logo from '../../img/logo.png';

const Navigation = ({ setLoggedIn, signedIn }) => {
    
    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('message')
        setLoggedIn()
    }

    return (
        <div className="Nav">
            <div className="Logo">
                <img src={Logo} alt="Logo"/>
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