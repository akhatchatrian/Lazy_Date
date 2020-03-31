import { signup, login,clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
// import SignupForm from './signup_form';
import SignupForm from './signup_form';



const msp = (state) => ({
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
});

const mdp = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SignupForm)