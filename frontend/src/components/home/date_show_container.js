import { connect } from 'react-redux';
import DateShow from './dateshow';
import { yelpSearch } from "../../actions/yelp_actions";


const msp = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    yelpData: state.yelp,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    yelpSearch: (yelpPayload) => dispatch(yelpSearch(yelpPayload))
});

export default connect(msp, mdp)(DateShow);