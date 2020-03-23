import { connect } from 'react-redux';
import DateShow from './dateshow';
import { yelpSearch } from "../../actions/yelp_actions";
import { createDateCollection, getDateCollection } from '../../actions/date_actions';
import { updateUser } from '../../actions/session_actions';



const msp = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    yelpData: state.yelp,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    yelpSearch: (yelpPayload) => dispatch(yelpSearch(yelpPayload)),
    createDateCollection: dateData => dispatch(createDateCollection(dateData)),
    updateUser: userData => dispatch(updateUser(userData))
});

export default connect(msp, mdp)(DateShow);