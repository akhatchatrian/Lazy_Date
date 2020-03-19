import { connect } from "react-redux";
import DateSeachForm from "./date_search_form";
import { yelpSearch } from "../../actions/yelp_actions";

const msp = state => ({
    currentUser: state.session.user
});

const mdp = dispatch => ({
    yelpSearch: () => dispatch(yelpSearch())
});

export default connect(msp, mdp)(DateSeachForm);