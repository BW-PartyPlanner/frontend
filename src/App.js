import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch, withRouter } from 'react-router-dom'
import UserDashboard from './components/UserDashboard/UserDashboard';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './styles.scss';

import FormikPotLuckForm from './components/PotLuck/PotLuckForm';

function App() {

  return (
    <div className="App">
   
      <Navigation />
      <FormikPotLuckForm />
      <Switch>
        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboard' component={UserDashboard} />    
      </Switch>

    </div>
  );
}

export default withRouter(App);