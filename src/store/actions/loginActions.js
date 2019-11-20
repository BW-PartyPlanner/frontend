import { axiosWithoutAuth as axios } from '../../utils/axiosUtils';

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR'

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