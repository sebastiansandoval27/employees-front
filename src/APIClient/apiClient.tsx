import axios from 'axios'

export const ApiClient = axios.create({
  baseURL: process.env.BACK_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
