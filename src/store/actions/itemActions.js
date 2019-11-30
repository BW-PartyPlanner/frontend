import { axiosWithAuth as axios } from '../../utils/axiosUtils';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const POST_ITEMS_REQUEST = 'POST_ITEMS_REQUEST'
export const POST_ITEMS_SUCCESS = 'POST_ITEMS_SUCCESS'
export const POST_ITEMS_ERROR = 'POST_ITEMS_ERROR'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

export const getItems = () => dispatch => {
  dispatch({ type: FETCH_ITEMS_REQUEST })

  axios()
    .get('/items')
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("Unable to grab items.", err.response.message)
      dispatch({ type: FETCH_ITEMS_ERROR })
    })

}

export const createItem = item => dispatch => {

  axios()
    .post("/items", item)
    .then(res => {
      console.log(res.data)
      dispatch({ type: POST_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_ITEMS_ERROR, payload: err.response });
    });

}

export const deleteItem = id => dispatch => {
  
  if (window.confirm('Are you sure you want to delete item?'))
  axios()
    .delete(`/items/${id}`)
    .then(res => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEMS_ERROR, payload: err.response });
    });

}

export const editItem = (id, item) => dispatch => {

  axios()
    .put(`/items/${item.id}`, item)
    .then(res => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEMS_ERROR, payload: err.response })
    })
}