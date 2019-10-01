
import axios from 'axios'

// axios.interceptors.request.use(function (config) {
//   let mytoken = localStorage.getItem('mytoken')
//   if (mytoken) {
//     config.headers.Authorization = mytoken
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

axios.defaults.baseURL = 'http://devfront.syppqc.com/'

export const login = (obj) => axios.post(`customer/login`,obj)
export const getUserInfo = (token) => axios.post(`account/info`)

export const getNews = (page) => axios.post(`press/lst?page=${page}`)
export const getNewsInfo = (id) => axios.post(`press/info?id=${id}`)

export const getAdress = () => axios.post(`province/lst`)
export const getActivity = (obj) => axios.post(`activity/lst`,obj)
export const getActInfo = (id) => axios.post(`activity/info?id=${id}`)

export const getAboutPage = (id) => axios.post(`information/info?id=${id}`)






