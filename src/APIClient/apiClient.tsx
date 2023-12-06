import axios from 'axios'

const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL

export const ApiClient = axios.create({
  baseURL: BACK_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
