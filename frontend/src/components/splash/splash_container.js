import { connect } from "react-redux";
import Splash from "./splash";
import { yelpSearch } from "../../actions/yelp_actions";
import {clearErrors} from "../../actions/session_actions"

const msp = state => ({
    loggedIn: state.session.isAuthenticated
})

const mdp = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(Splash);