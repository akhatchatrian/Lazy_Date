import React from 'react';
import { login } from '../../actions/session_actions'
import { connect } from 'react-redux';
// import SigninForm from './signin_form';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    // currentUser: state.session.currentUser,
    // errors: [state.errors.session.errors],
    formType: `Log in`
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)