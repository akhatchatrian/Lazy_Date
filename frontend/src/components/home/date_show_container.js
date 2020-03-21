import { connect } from 'react-redux';
import DateShow from './dateshow';
import { yelpSearch } from "../../actions/yelp_actions";
import { createDateCollection } from '../../util/date_util';


const msp = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    yelpData: state.yelp,
    errors: state.errors.session
});

const mdp = (dispatch) => ({
    yelpSearch: (yelpPayload) => dispatch(yelpSearch(yelpPayload)),
    createDateCollection: dateData => dispatch(createDateCollection(dateData))
});

export default connect(msp, mdp)(DateShow);