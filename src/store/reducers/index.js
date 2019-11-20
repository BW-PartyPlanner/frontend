<<<<<<< HEAD
import { combineReducers } from 'redux'
import { reducer as signupReducer } from './signupReducer';
import { reducer as loginReducer } from './loginReducer';

export default combineReducers({ signupReducer, loginReducer })
=======
import { combineReducers } from 'redux';
import { reducer as signupReducer } from './signupReducer';
import { reducer as loginReducer } from './loginReducer';
import { reducer as itemReducer } from './itemReducer';
import { reducer as partyReducer } from './partyReducer';

export default combineReducers({ signupReducer, loginReducer, itemReducer, partyReducer })
>>>>>>> e56420b3e349334a48a9719e5cbb6d9f64002796
