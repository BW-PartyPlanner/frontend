import { axiosWithoutAuth as axios } from '../../utils/axiosUtils';

export const FETCH_SIGNUP_REQUEST = 'FETCH_SIGNUP_REQUEST'
export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS'
export const FETCH_SIGNUP_ERROR = 'FETCH_SIGNUP_ERROR'

export const registerUser = user => dispatch => {
  console.log('user', user)
  dispatch({ type: FETCH_SIGNUP_REQUEST })

  axios()
    .post('/auth/register', user)
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_SIGNUP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("Unable to create user.", err.response.error)
      dispatch({ type: FETCH_SIGNUP_ERROR })
    })

}