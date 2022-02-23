import { authReducers } from './Reducers'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {
    store,
    persistor
}