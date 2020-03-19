import { connect } from "react-redux";
import Home from './home';


const msp = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  errors: state.errors.session
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Home);
