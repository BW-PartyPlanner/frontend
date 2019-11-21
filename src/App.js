
import React from 'react';
import Navigation from './components/Navigation';
import { Route, Switch, withRouter } from 'react-router-dom'
import UserDashboard from './components/UserAuth/UserDashboard';
import LoginForm from './components/UserAuth/LoginForm';
import SignUpForm from './components/UserAuth/SignUpForm';
import HostedForm from './components/HostedParty/HostedForm';
import HostedParty from './components/HostedParty/HostedParty';
import PotLuckForm from './components/PotLuck/PotLuckForm';
import PotLuckParty from './components/PotLuck/PotLuckParty';
import PrivateRoute from './auth/PrivateRoute'

function App() {

  return (
    <div className="App">
   
      <Navigation />
      <Switch>
        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/dashboard' component={UserDashboard} />
        <PrivateRoute path='/hostedform' component={HostedForm} />
        <PrivateRoute path='/potluckform' component={PotLuckForm} /> 
        <PrivateRoute path='/potluckparty' component={PotLuckParty} /> 
        <PrivateRoute path='/hostedform' component={HostedForm} />  
        <PrivateRoute path='/hostedparty' component={HostedParty} />
      </Switch>

    </div>
  );
}

export default withRouter(App);