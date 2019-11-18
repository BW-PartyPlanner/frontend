import { combineReducers } from 'redux'
import { reducer as signupReducer } from './signupReducer';
import { reducer as loginReducer } from './loginReducer';

export default combineReducers({ signupReducer, loginReducer })