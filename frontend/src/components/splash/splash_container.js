import { connect } from "react-redux";
import Splash from "./splash";
import { yelpSearch } from "../../actions/yelp_actions";


const msp = state => ({
    yelpData: state.yelpData
})

const mdp = dispatch => ({
    yelpSearch: () => dispatch(yelpSearch())
})

export default connect(msp, mdp)(Splash);