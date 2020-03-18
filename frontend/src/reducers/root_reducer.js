import { combineReducers } from 'redux';
import session from './session_reducer';
import yelp from './yelp_reducer';

const RootReducer = combineReducers({
  session,
  yelp
});

export default RootReducer;