<<<<<<< HEAD
import { login } from '../../actions/session_actions'
=======
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions'
>>>>>>> 34ff1161ad92e6da285fda39dde66b554410eeff
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

export default connect(msp, mdp)(LoginForm)