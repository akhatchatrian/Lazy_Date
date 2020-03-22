import * as YELPUtil from '../util/yelp_api_util';

export const RECEIVE_YELP_DATA = "RECEIVE_YELP_DATA";
export const RECEIVE_BIZ_DATA = "RECEIVE_BIZ_DATA"

export const receiveYelpData = yelpData => ({
    type: RECEIVE_YELP_DATA,
    yelpData
});

export const receiveBizData = business => ({
    type: RECEIVE_BIZ_DATA,
    business
})

export const yelpSearch = (yelpPayload) => dispatch => (
    YELPUtil.yelpSearch(yelpPayload).then(response =>
        dispatch(receiveYelpData(response.data))
    )
)

export const bizSearch = bizId => dispatch => (
    YELPUtil.bizSearch(bizId).then(response => 
        dispatch(receiveBizData(response.data)))
)