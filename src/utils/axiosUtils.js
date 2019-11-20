<<<<<<< HEAD
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
=======
import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'https://party-planner-api.herokuapp.com/api'
  })
}

export function getToken() {
  return localStorage.getItem('token')
}

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://party-planner-api.herokuapp.com/api',
    headers: {
      "Authorization": getToken(),
      "Content-Type": 'application/json'
    }
  })
>>>>>>> e56420b3e349334a48a9719e5cbb6d9f64002796
}