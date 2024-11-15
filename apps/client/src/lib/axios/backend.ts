import axios from "axios"
import Cookies from "js-cookie"

import { environment } from "@/config"

const backend = axios.create({
  baseURL: environment.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
})

// Add a request interceptor
backend.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth-token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
backend.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error)
  }
)

export default backend
