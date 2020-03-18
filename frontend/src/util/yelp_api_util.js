import axios from "axios"

export const yelpSearch = () => {
  return axios.get('/api/yelp/data')
};