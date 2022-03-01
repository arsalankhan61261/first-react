import { combineReducers } from 'redux'
import { authReducers, countReducer } from './Reducers'

let rootReducer = combineReducers({ authReducers, combineReducers })

export default rootReducer;