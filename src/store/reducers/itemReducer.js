import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR, POST_ITEMS_REQUEST, POST_ITEMS_SUCCESS, POST_ITEMS_ERROR, ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from '../actions/itemActions';

const initialState = {
  isLoading: false,
  error: '',
  items: [{
    name: '',
    description: '',
    isAccountedFor: false,
    party_id: '',
    user_id: ''
  }]
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
          items: action.payload,
          error: null
      }
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case POST_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case POST_ITEMS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          items: action.payload,
          error: null
      }
    case POST_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_ITEM:
      return {
        ...state, items: [ ...state.items, 
          {
            name: action.payload.name,
            description: action.payload.description,
            isAccountedFor: false,
          }
        ]
      }
    case TOGGLE_ITEM:
      const toggleItem = state.items.map(item => {
        if (item.id === action.payload.id) {
          console.log(item, !item.isAccountedFor)
          return { ...item, isAccountedFor: !item.isAccountedFor };
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: toggleItem
      }
    case REMOVE_ITEM:
      return {
        items: state.items.filter(item => !item.isAccountedFor)
      };
    default:
      return state
    }
}