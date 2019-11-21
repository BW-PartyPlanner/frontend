import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/userActions';

const initialState = {
  isLoading: false,
  error: '',
  items: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
    }
}