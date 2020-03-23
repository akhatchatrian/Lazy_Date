import axios from "axios"

export const yelpSearch = (yelpPayload) => {
  return axios.post('/api/yelp/data', yelpPayload)
};

export const bizSearch = bizId => {
  return axios.get(`/api/yelp/data/${bizId}`)
}