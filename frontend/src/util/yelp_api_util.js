import axios from "axios"

export const yelpSearch = (yelpPayload) => {
  return axios.post('/api/yelp/data', yelpPayload)
};