import { signup, login } from '../../actions/session_actions';
import { connect } from 'react-redux';
// import SignupForm from './signup_form';
import SignupForm from './signup_form';



const msp = (state, errors) => ({
    loggedIn: state.session.isAuthenticated,
    // currentUser: state.session.currentUser,
    errors: state.errors.session,
});

const mdp = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(msp, mdp)(SignupForm)