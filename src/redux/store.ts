import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { reducer } from './reducer'

/**
 * Redux persist setup based on docs
 */
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

/**
 * Setup middleware based on reduc-toolkit recommendation
 * @see https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 */
const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}).concat([logger])

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

export type RootState = ReturnType<typeof store.getState>
