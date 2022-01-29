import axios from 'axios'
import { configure } from 'axios-hooks'

const client = axios.create({
  baseURL: 'https://localhost:5001/',
  headers: {
    Accept: ' application/json',
    'Content-Type': 'application/json'
  }
})

configure({ axios: client })
