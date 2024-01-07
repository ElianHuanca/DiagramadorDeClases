import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </SocketProvider>
  </React.StrictMode>
)
