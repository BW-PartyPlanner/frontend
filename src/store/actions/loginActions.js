<<<<<<< HEAD
export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR'
=======
import { axiosWithoutAuth as axios, getToken } from '../../utils/axiosUtils';

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOGGED_IN_FALSE = 'SET_LOGGED_IN_FALSE'

export const loginUser = user => dispatch => {
  dispatch({ type: FETCH_LOGIN_REQUEST })

  axios()
    .post('/auth/login', user)
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data })
      localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
      console.log("Unable to login.", err.response.message)
      dispatch({ type: FETCH_LOGIN_ERROR })
    })

}

export const setLoggedIn = () => dispatch => {
  if (!getToken()) {
    return dispatch({ type: SET_LOGGED_IN_FALSE })
  }
  dispatch({ type: SET_LOGGED_IN })
}
>>>>>>> e56420b3e349334a48a9719e5cbb6d9f64002796
