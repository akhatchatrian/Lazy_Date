import axios from "axios"

export const createDateCollection = (dateCollection) => {
  return axios.post('/api/date/data', dateCollection)
};