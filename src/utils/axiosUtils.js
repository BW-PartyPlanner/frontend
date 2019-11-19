import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'https://party-planner-api.herokuapp.com/'
  })
}

export function getToken() {
  return localStorage.getItem('token')
}

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://party-planner-api.herokuapp.com/',
    headers: {
      Authorization: getToken(),
    }
  })
}