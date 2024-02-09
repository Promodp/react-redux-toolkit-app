import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from "../src/RTKQuery/apiSlice";
import counterReducer from './ReduxTool/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer, // reducer for the counter
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer, // reducer for the api call using RTK query
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)