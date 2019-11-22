
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch, withRouter } from 'react-router-dom'
import UserDashboard from './components/UserDashboard/UserDashboard';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import HostedForm from './components/HostedParty/HostedForm';
import HostedParty from './components/HostedParty/HostedParty';
import PotLuckForm from './components/PotLuck/PotLuckForm';
import PotLuckParty from './components/PotLuck/PotLuckParty';
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
        <Route path='/dashboard' render={props => <UserDashboard {...props} /> } />
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