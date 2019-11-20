<<<<<<< HEAD
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: '',
  users: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: null,
        error: null
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: true,
        users: null,
        error: action.payload
      }
    default:
      return state
    }
=======
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR, SET_LOGGED_IN, SET_LOGGED_IN_FALSE } from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: '',
  users: [],
  isLoggedIn: false
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case SET_LOGGED_IN: 
      return {
        ...state,
        isLoggedIn: true
      }
    case SET_LOGGED_IN_FALSE: 
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
    }
>>>>>>> e56420b3e349334a48a9719e5cbb6d9f64002796
}