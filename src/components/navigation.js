import React from 'react';
import { Link, Route } from 'react-router-dom'
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
            <div>
                {/* <Route exact path="/" component={Home}/> */}
                {/* <Route path="/Home" component={Home}/> */}
                <Route path="/SignUp" component={SignUpForm}/>
                <Route path="/Login" component={LoginForm}/>
                {/* <Route path="/Profile" component={Profile}/> */}
            </div>
        </div>
    );
};

export default Navigation;