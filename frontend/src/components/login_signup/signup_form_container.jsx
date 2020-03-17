import React from 'react';
import { signup} from '../../actions/session_actions';
import { connect } from 'react-redux';
// import SignupForm from './signup_form';
import SessionForm from './session_form';



const mapStateToProps = (state, errors) => ({
    currentUser: state.session.currentUser,
    errors: state.errors.session.errors,
    formType: `Sign up`
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)