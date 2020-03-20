import { RECEIVE_DATE_DATA } from '../actions/date_actions';

export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATE_DATA:
      return Object.assign({}, state, action.yelpData) //figure out how to get only the current users date templates for now. 
    default:
      return state;
  }
}