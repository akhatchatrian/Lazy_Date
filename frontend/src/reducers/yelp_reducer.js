import { RECEIVE_YELP_DATA, RECEIVE_BIZ_DATA } from '../actions/yelp_actions';

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_YELP_DATA:
      return Object.assign({}, state, action.yelpData)
    case RECEIVE_BIZ_DATA:
      return Object.assign({}, state, action.business)
    default:
      return state;
  }
}