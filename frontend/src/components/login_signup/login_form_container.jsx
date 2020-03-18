import React from 'react';
import { login } from '../../actions/session_actions'
import { connect } from 'react-redux';
// import SigninForm from './signin_form';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)