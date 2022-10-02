import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://qchang-task-api.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
