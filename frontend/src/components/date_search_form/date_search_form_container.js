import { connect } from "react-redux";
import DateSeachForm from "./date_search_form";
import { yelpSearch } from "../../actions/yelp_actions";
import { getDateCollection, createDateCollection } from "../../actions/date_actions";

const msp = state => ({
    currentUser: state.session.user
});

const mdp = dispatch => ({
    yelpSearch: (yelpPayload) => dispatch(yelpSearch(yelpPayload)),
    getDateCollection: userId => dispatch(getDateCollection(userId)),
    createDateCollection: dateData => dispatch(createDateCollection(dateData))

});

export default connect(msp, mdp)(DateSeachForm);