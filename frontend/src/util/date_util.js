import axios from "axios"

export const createDateCollection = (dateCollection) => {
  return axios.post('/api/date/data', dateCollection)
};

export const getDateCollection = params => {
  return axios.get(`/api/data/data/${params.user.id}`)
}