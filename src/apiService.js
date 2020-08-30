import axios from 'axios';
import { getTripSummaryAction, getErrorAction } from './redux/actionCreater'


export const getTripSummary = (request) => {

    return dispatch => {
        axios({
            url: 'http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36',
            method: 'post',
            data: request.body
        }).then(response => {
            if (response.data.responseDescription == "success") {
                dispatch(getTripSummaryAction(response.data));
            }
        }).catch(function (error) {
            dispatch(getErrorAction(error))
        })
    }
}

