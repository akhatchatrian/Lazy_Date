import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, UPDATE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
        savedDates: action.currentUser.savedDates
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        isSignedIn: true
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        savedDates: action.currentUser.savedDates
      }
    default:
      return state;
  }
}