import axios from 'axios'
import { configure } from 'axios-hooks'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
  headers: {
    Accept: ' application/json',
    'Content-Type': 'application/json'
  }
})

configure({ axios: client })
