import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {getTripSummary} from '../apiService'



const store = createStore(reducer, applyMiddleware(thunk));

export default store;