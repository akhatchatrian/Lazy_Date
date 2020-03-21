import axios from "axios"

export const createDateCollection = (dateCollection) => {
  return axios.post('/api/date/data', dateCollection)
};

export const getDateCollection = params => {
  return axios.get(`/api/date/data/${params.user.id}`)
}