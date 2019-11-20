<<<<<<< HEAD
import { FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS, FETCH_SIGNUP_ERROR } from '../actions/signupActions';

const initialState = {
  isLoading: false,
  error: '',
  users: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: null,
        error: null
      }
    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: true,
        users: null,
        error: action.payload
      }
    default:
      return state
    }
}
=======
import { FETCH_SIGNUP_REQUEST, FETCH_SIGNUP_SUCCESS, FETCH_SIGNUP_ERROR } from '../actions/signupActions';

const initialState = {
  isLoading: false,
  error: '',
  users: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
    }
}
>>>>>>> e56420b3e349334a48a9719e5cbb6d9f64002796
