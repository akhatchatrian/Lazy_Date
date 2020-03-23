import * as DATEUtil from '../util/date_util';

export const RECEIVE_DATE_DATA = "RECEIVE_DATE_DATA";

export const receiveDateData = dateData => ({
    type: RECEIVE_DATE_DATA,
    dateData
});

//get ride of then when done
export const createDateCollection = (dateData) => dispatch => (
    DATEUtil.createDateCollection(dateData).then(response =>
        dispatch(receiveDateData(response.data))
    )
)

export const getDateCollection = (userId) => dispatch => (
    DATEUtil.getDateCollection(userId).then(response =>
        dispatch(receiveDateData(response.data))
    )
)

