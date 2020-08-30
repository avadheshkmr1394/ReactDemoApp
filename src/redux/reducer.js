import { GET_TRIP_SUMMARY, GET_Error } from './action'

const initialState = {
    tripSummary: [],
    Error: '',
    isLoading: false
}

const reducers = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_TRIP_SUMMARY:
            if (action.payload) {
                return {
                    ...state,
                    tripSummary: action.payload.data,
                    isLoading: true
                }
            }
        case GET_Error:
            return {
                ...state,
                Error: action.payload
            }
        default:
            return state
    }
}

export default reducers