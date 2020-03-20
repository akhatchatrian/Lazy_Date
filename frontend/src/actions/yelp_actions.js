import * as YELPUtil from '../util/yelp_api_util';

export const RECEIVE_YELP_DATA = "RECEIVE_YELP_DATA";

export const receiveYelpData = yelpData => ({
    type: RECEIVE_YELP_DATA,
    yelpData
});

export const yelpSearch = (yelpPayload) => dispatch => (
    YELPUtil.yelpSearch(yelpPayload).then(response =>
        dispatch(receiveYelpData(response.data))
    )
)