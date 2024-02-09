import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/Redux/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})