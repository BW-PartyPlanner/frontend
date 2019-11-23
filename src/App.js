
import React, { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch, withRouter } from 'react-router-dom'
import UserDashboard from './components/UserDashboard/UserDashboard';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import HostedForm from './components/HostedParty/HostedForm';
import HostedParty from './components/HostedParty/HostedParty';
import PotLuckForm from './components/PotLuck/PotLuckForm';
import PotLuckParty from './components/PotLuck/PotLuckParty';
import ItemList from './components/Items/ItemList';
import ItemForm from './components/Items/ItemForm';
import AccountedForForm from './components/AccountedFor/AccountedForForm';
import GuestListForm from './components/GuestList/GuestListForm';
import PrivateRoute from './auth/PrivateRoute';
import decode from 'jwt-decode';
import { connect } from 'react-redux';
import { setUserId } from './store/actions/userActions';

function App({ setUserId, user_id }) {

  useEffect(() => {
    if (user_id === '' && localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      const { subject }= decode(token)

      setUserId(subject)
    }
  })

  return (
    <>
      <Navigation />
    <div className="App">
   
      <Switch>

        <Route path='/items' component={ItemList} />
        <Route path='/items/:id' component={ItemList} />
        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />
        <PrivateRoute path='/dashboard' component={UserDashboard} />
        <PrivateRoute path='/potluckform' component={PotLuckForm} /> 
        <PrivateRoute path='/potluckparty' component={PotLuckParty} /> 
        <PrivateRoute path='/potluckparty/:id' component={PotLuckParty} /> 
        <PrivateRoute path='/hostedform' component={HostedForm} />  
        <PrivateRoute path='/hostedparty' component={HostedParty} />
        <PrivateRoute path='/hostedparty/:id' component={HostedParty} />
        <PrivateRoute path='/itemForm' component={ItemForm} />
        <PrivateRoute path='/accountedForForm' component={AccountedForForm} />
        <PrivateRoute path='/guestListForm' component={GuestListForm} />

      </Switch>

    </div>
    </>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  user_id: userReducer.user_id
})

export default connect(mapStateToProps, { setUserId })(withRouter(App));