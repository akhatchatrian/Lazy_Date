import { connect } from "react-redux";
import Splash from "./splash";


const msp = state => ({
    loggedIn: state.session.isAuthenticated
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Splash);