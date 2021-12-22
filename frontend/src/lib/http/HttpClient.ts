import axios from 'axios'

const client = axios({
  baseURL: 'http://localhost:5001/api',
  headers: {
    Accept: ' application/json',
    'Content-Type': 'application/json'
  }
})

export default client
