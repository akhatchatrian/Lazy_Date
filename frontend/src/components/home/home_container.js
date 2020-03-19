import { connect } from "react-redux";
import Home from './home';


const msp = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  errors: state.errors.session
  // Get user's most recent dates
  // Get new date options
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Home);
