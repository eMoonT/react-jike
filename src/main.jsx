import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'

// import { RouterProvider } from 'react-router-dom'
// import router from '@/router'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from '@/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
)
