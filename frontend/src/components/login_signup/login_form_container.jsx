import { login } from '../../actions/session_actions'
import { connect } from 'react-redux';
// import SigninForm from './signin_form';
import LoginForm from './login_form';

const msp = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  // currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);