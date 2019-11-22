
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
import ItemForm from './components/Items/ItemForm'
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
        <PrivateRoute path='/itemForm' component={ItemForm} />
      </Switch>

    </div>
  );
}

export default withRouter(App);