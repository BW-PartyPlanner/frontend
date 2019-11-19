import { axiosWithoutAuth as axios } from '../../utils/axiosUtils';

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST'
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR'

export const loginUser = () => dispatch => {
  dispatch({ type: FETCH_LOGIN_REQUEST })

  axios()
    .get('/users/register', )
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("Unable to create user.", err.response.error)
      dispatch({ type: FETCH_LOGIN_ERROR })
    })

}