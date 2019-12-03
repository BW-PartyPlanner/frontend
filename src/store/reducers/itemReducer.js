import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR, POST_ITEMS_REQUEST, POST_ITEMS_SUCCESS, POST_ITEMS_ERROR, PUT_ITEMS_SUCCESS, PUT_ITEMS_ERROR, PUT_ITEMS_REQUEST, ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from '../actions/itemActions';

export const initialState = {
  isLoading: false,
  error: '',
  items: [
    {
      id: 1,
      name: 'Chips',
      isAccountedFor: false,
    },
    {
      id: 2,
      name: 'Chairs',
      isAccountedFor: false,
    }
  ]
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
    case PUT_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case PUT_ITEMS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          items: action.payload,
          error: null
      }
    case PUT_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_ITEM:
      return {
        ...state, items: [ ...state.items, 
          {
<<<<<<< HEAD
            name: action.payload.name,
            description: action.payload.description,
            isAccountedFor: false,
=======
            name: action.payload,
            isAccountedFor: false,
            id: Date.now()
>>>>>>> 4b56245c5f0f47275d552f5a9195bd0901421b70
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