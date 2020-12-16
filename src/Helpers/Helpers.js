import Axios from 'axios'

const publicFetch = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export { publicFetch }
