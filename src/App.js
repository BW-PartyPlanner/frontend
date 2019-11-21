
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
import GuestListForm from './components/Guests/GuestListForm';
import AccountedForForm from './components/AccountedFor/AccountedForForm';


function App() {

  return (
    <div className="App">
   
      <Navigation />
      <Switch>
        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />
        <Route path='/dashboard' render={props => <UserDashboard {...props} /> } />
        <Route path='/hostedform' component={HostedForm} />
        <Route path='/potluckform' component={PotLuckForm} /> 
        <Route path='/potLuckParty' component={PotLuckParty} /> 
        <Route path='/hostedForm' component={HostedForm} />  
        <Route path='/hostedParty' component={HostedParty} />
        <Route path='/guestListForm' component={GuestListForm} />
        <Route path='/accountedForForm' component={AccountedForForm} />
      </Switch>

    </div>
  );
}

export default withRouter(App);