import { axiosWithAuth as axios } from '../../utils/axiosUtils';

export const FETCH_PARTIES_REQUEST = 'FETCH_PARTIES_REQUEST'
export const FETCH_PARTIES_SUCCESS = 'FETCH_PARTIES_SUCCESS'
export const FETCH_PARTIES_ERROR = 'FETCH_PARTIES_ERROR'

export const POST_PARTY_REQUEST = 'POST_PARTY_REQUEST'
export const POST_PARTY_SUCCESS = 'POST_PARTY_SUCCESS'
export const POST_PARTY_ERROR =   'POST_PARTY_ERROR'

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
  dispatch({ type: POST_PARTY_REQUEST })
  const data = {
    ...party,
    budget: 0
  }
  axios()
    .post("/parties", data)
    .then(res => {
      dispatch({ type: POST_PARTY_SUCCESS, payload: res.data });
      console.log(res.data, "from post party request  .party")
    })
    .catch(err => {
      dispatch({ type: POST_PARTY_ERROR, payload: err.response });
    });

}

export const deleteParty = id => dispatch => {
  
  if (window.confirm('Are you sure you want to delete party?'))
  axios()
    .delete(`/parties/${id}`)
    .then(res => {
      dispatch({ type: FETCH_PARTIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PARTIES_ERROR, payload: err.response });
    });

}