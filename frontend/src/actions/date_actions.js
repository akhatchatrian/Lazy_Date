import * as DATEUtil from '../util/date_util';

export const RECEIVE_DATE_DATA = "RECEIVE_DATE_DATA";

export const recieveDateData = dateData => ({
    type: RECEIVE_DATE_DATA,
    dateData
});

//get ride of then when done
export const createDateCollection = (dateData) => dispatch => (
    DATEUtil.createDateCollection(dateData).then(response =>
        dispatch(recieveDateData(response.data))
    )
)

export const getDateCollection = (user) => dispatch => (
    DATEUtil.getDateCollection.apply(user).then(response =>
        dispatch(recieveDateData(response.data))
    )
)
