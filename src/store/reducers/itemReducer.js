import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from '../actions/itemActions';

const initialState = {
  isLoading: false,
  error: '',
  items: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
    }
}