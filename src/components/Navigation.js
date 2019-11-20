import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import { setLoggedIn } from '../store/actions/loginActions'
import { connect } from 'react-redux';

const Navigation = ({ setLoggedIn, signedIn }) => {
    
    const signOut = () => {
        localStorage.removeItem('token')
        setLoggedIn()
    }

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
                {signedIn && <Link to="/dashboard">
                    Dashboard
                </Link>}
                {signedIn && <Link to="/login" onClick={() => signOut()}>
                    Logout
                </Link>}
            </div>
            <Route exact path='/signup' render={props => <SignUpForm {...props} /> } />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/dashboard' component={UserDashboard} />
        </div>
    );
};

const mapStateToProps = state => ({
  signedIn: state.loginReducer.isLoggedIn 
})

export default connect(mapStateToProps, { setLoggedIn })(Navigation);