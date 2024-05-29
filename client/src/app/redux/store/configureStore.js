import { configureStore, Tuple, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import boxSlice from '../reducerSlices/boxSlice';
const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({ 
    box: boxSlice,

  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)  
export const store = configureStore({
    reducer: persistedReducer,
  middleware: () => new Tuple( logger),

})

export const persistor = persistStore(store)