import { axiosWithoutAuth as axios } from '../../utils/axiosUtils';

export const FETCH_PARTIES_REQUEST = 'FETCH_PARTIES_REQUEST'
export const FETCH_PARTIES_SUCCESS = 'FETCH_PARTIES_SUCCESS'
export const FETCH_PARTIES_ERROR = 'FETCH_PARTIES_ERROR'

export const getParties = () => dispatch => {
  dispatch({ type: FETCH_PARTIES_REQUEST })

  axios()
    .get('/parties')
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_PARTIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("Unable to find parties.", err.response.message)
      dispatch({ type: FETCH_PARTIES_ERROR })
    })

}

export const createParty = party => dispatch => {

  axios()
    .post("/parties", party)
    .then(res => {
      dispatch({ type: FETCH_PARTIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PARTIES_ERROR, payload: err.response });
    });

}

export const deleteParty = id => dispatch => {
  
  axios()
    .delete(`/parties/${id}`)
    .then(res => {
      dispatch({ type: FETCH_PARTIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PARTIES_ERROR, payload: err.response });
    });

}