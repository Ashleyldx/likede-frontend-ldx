import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

request.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  err => Promise.reject(err)
)
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Message.error(error.response?.data)
    return Promise.reject(error)
  }
)

export default request
