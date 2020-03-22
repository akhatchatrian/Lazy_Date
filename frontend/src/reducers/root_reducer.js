import { combineReducers } from 'redux';
import session from './session_reducer';
import yelp from './yelp_reducer';
import errors from './errors_reducer';
import date from './date_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  yelp
});

export default RootReducer;