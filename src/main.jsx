import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store  from './store/index'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from '../src/routers/index'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
