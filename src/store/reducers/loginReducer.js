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
}