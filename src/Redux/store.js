import {authReducers, countReducers} from './Reducers'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage 
}

const persistedReducer = persistReducer(persistConfig, authReducers) 

const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

export {
    store,
    persistor
}