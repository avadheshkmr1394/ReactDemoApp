import { GET_TRIP_SUMMARY, GET_Error } from './action'

export const getTripSummaryAction = (data) => {
    return {
        type: GET_TRIP_SUMMARY,
        payload: data
    }
}


export const getErrorAction = (data) => {
    return {
        type: GET_Error,
        payload: data
    }
}