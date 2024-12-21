import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { persistor, store } from './Store/Store.js'
import { ContextProvider } from './Context/ContextProvider.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </HashRouter>
    </PersistGate>
  </Provider>
)
