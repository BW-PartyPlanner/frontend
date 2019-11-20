import { axiosWithoutAuth as axios, getToken } from '../../utils/axiosUtils';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const getItems = () => dispatch => {
  dispatch({ type: FETCH_ITEMS_REQUEST })

  axios()
    .get('/auth/items')
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
    .post("/auth/items", item)
    .then(res => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEMS_ERROR, payload: err.response });
    });

}

export const deleteItem = id => dispatch => {
  
  axios()
    .delete(`/auth/items/${id}`)
    .then(res => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEMS_ERROR, payload: err.response });
    });

}