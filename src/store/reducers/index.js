import { combineReducers } from 'redux';
import { reducer as signupReducer } from './signupReducer';
import { reducer as loginReducer } from './loginReducer';
import { reducer as itemReducer } from './itemReducer';
import { reducer as partyReducer } from './partyReducer';
import { reducer as userReducer } from './userReducer';

export default combineReducers({ signupReducer, loginReducer, itemReducer, partyReducer, userReducer })