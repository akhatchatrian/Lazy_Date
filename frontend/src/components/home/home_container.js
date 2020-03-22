import { connect } from "react-redux";
import Home from './home';


const msp = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  errors: state.errors.session,
  userDates: state.session.user.savedDates,
  userCollections: state.dateData
  // Get new date options
});

const mdp = dispatch => ({
  getDateCollection: userId => dispatch(getDateCollection(userId))
});

export default connect(msp, mdp)(Home);
