import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR, ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from '../actions/itemActions';

const initialState = {
  isLoading: false,
  error: '',
  items: [{
    name: '',
    description: '',
    isCompleted: false,
    id: ''
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
    case ADD_ITEM:
      return {
        ...state, items: [ ...state.items, 
          {
            item: action.payload,
            isCompleted: false,
            id: Date.now(),
          }
        ]
      }
    case TOGGLE_ITEM:
      const toggleItem = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, isCompleted: !item.isCompleted };
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
        items: state.items.filter(item => !item.isCompleted)
      };
    default:
      return state
    }
}