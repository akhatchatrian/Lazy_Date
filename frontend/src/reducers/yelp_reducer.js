import { RECEIVE_YELP_DATA } from '../actions/session_actions';

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_YELP_DATA:
      return Object.assign({}, state, action.yelpData)
    default:
      return state;
  }
}