<<<<<<< HEAD
//KEVIN SILVESTRE REACT II / WORKING ON IT
=======
import { FETCH_PARTIES_REQUEST, FETCH_PARTIES_SUCCESS, FETCH_PARTIES_ERROR } from '../actions/partyActions';

const initialState = {
  isLoading: false,
  error: '',
  items: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PARTIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_PARTIES_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_PARTIES_ERROR:
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
