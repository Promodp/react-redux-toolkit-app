// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import { store } from './store'
// import { Provider } from 'react-redux'

// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { productsApi } from "../src/RTKQuery/apiSlice";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* This is used to wrap the main component for the api call using RTK query */}
//     <ApiProvider api={productsApi}> 
//         <App/>
//       </ApiProvider>
//       </React.StrictMode>,
//   document.getElementById('root')
// )


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider api={productsApi}> 
//         <App/>
//       </Provider>
//       </React.StrictMode>,
//   document.getElementById('root')
// )

import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)