import { connect } from "react-redux";
import Home from './home';
import { getDateCollection } from "../../actions/date_actions";
import { receiveCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { yelpSearch } from "../../actions/yelp_actions"


const msp = (state, ownProps) => {
     return {
      loggedIn: state.session.isAuthenticated,
      currentUser: state.session.user,
      errors: state.errors.session,
      userDates: state.session.user.savedDates,
      userCollections: Object.values(state.date)
      // Get new date options
    }
};

const mdp = dispatch => ({
  getDateCollection: userId => dispatch(getDateCollection(userId)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
  getCurrentUser: () => dispatch(getCurrentUser()),
  yelpSearch: yelpData => dispatch(yelpSearch(yelpData))
});

export default connect(msp, mdp)(Home);
