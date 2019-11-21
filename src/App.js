
import React from 'react';
import Navigation from './components/Navigation';
import { Route, Switch, withRouter } from 'react-router-dom'
import UserDashboard from './components/UserDashboard';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HostedForm from './components/HostedParty/HostedForm';
import HostedParty from './components/HostedParty/HostedParty';
import PotLuckForm from './components/PotLuck/PotLuckForm';
import PotLuckParty from './components/PotLuck/PotLuckParty';


function App() {

  return (
    <div className="App">
   
      <Navigation />
      <Switch>
        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboard' component={UserDashboard} />
        <Route path='/hostedform' component={HostedForm} />
        <Route path='/potluckform' component={PotLuckForm} /> 
        <Route path='/potLuckParty' component={PotLuckParty} /> 
        <Route path='/hostedForm' component={HostedForm} />  
        <Route path='/hostedParty' component={HostedParty} />
      </Switch>

    </div>
  );
}

export default withRouter(App);