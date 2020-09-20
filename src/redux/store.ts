import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reducer } from './reducer'

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
