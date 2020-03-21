import axios from "axios"

export const createDateCollection = (dateCollection) => {
  return axios.post('/api/date/data', dateCollection)
};

export const getDateCollection = userId => {
  return axios.get(`/api/date/data/${userId}`)
}