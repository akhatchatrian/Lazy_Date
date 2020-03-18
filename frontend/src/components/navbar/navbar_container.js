import React from 'react';
import Navbar from './navbar';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
})


const mapDispatchToProps = dispatch => ({
    signup: id => dispatch(signup(id)),
    login: id => dispatch(login(id)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);