
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
import PotLuckPartyCreated from './components/PotLuck/PotLuckPartyCreated';
import ItemList from './components/Items/ItemList';
import ItemForm from './components/Items/ItemForm';
import EditItemForm from './components/Items/EditItemForm';
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

        <PrivateRoute path='/potluckform' component={PotLuckForm} /> 
        <Route path='/potluckparty' render={props => <PotLuckParty {...props} />} /> 
        <PrivateRoute path='/potluckparty/:id' component={PotLuckParty} /> 
        <Route path='/potluckparty/:id/items' render={props => <ItemList {...props} />} />
        <Route path='/potluckparty/:id/items/:id' render={props => <ItemList {...props} />} />
        <Route path='/potluckparty/:id/edititem/:id' render={props => <EditItemForm {...props} />} />
        <PrivateRoute path='/potluckpartycreated' component={PotLuckPartyCreated} /> 
        
        <PrivateRoute path='/hostedform' component={HostedForm} />  
        <PrivateRoute path='/hostedparty' component={HostedParty} />
        <PrivateRoute path='/hostedparty/:id' component={HostedParty} />
        <Route path='/hostedparty/:id/items' component={ItemList} />
        <Route path='/hostedparty/:id/items/:id' component={ItemList} />
        <Route path='/hostedparty/:id/edititem/:id' render={props => <EditItemForm {...props} />} />

        <Route exact path='/' component={UserDashboard} />
        <Route path='/signup' render={props => <SignUpForm {...props} /> } />
        <Route path='/login' component={LoginForm} />

        <PrivateRoute path='/dashboard' component={UserDashboard} />
        <PrivateRoute path='/itemform' component={ItemForm} />
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