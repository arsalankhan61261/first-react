import { combineReducers } from 'redux'
import { authReducers, countReducer } from './Reducers'

let rootReducer = combineReducers({ authReducers, countReducer })

export default rootReducer;