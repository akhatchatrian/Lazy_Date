import Navbar from './navbar';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { receiveCurrentUser  } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
})


const mdp = dispatch => ({
  signup: id => dispatch(signup(id)),
  login: id => dispatch(login(id)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(msp, mdp)(Navbar);


