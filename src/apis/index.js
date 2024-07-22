import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const createNewUserAPI = async (email) => {
  const response = await axios.post(`${API_ROOT}/v1/users`, email)
  return response.data
}
export const verifyEmailAPI = async (userId, OTP) => {
  const response = await axios.post(`${API_ROOT}/v1/users/verify/${userId}`, { OTP: OTP })
  return response.data
}
export const fetchWeatherWithinEmailAPI = async (userId, city, days) => {
  const response = await axios.get(`${API_ROOT}/v1/users/weather/${userId}/${city}/${days}`)
  return response.data
}
export const fetchWeatherWithoutEmailAPI = async (city, days) => {
  const response = await axios.get(`${API_ROOT}/v1/weather/${city}/${days}`)
  return response.data
}