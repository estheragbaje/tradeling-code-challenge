import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import App from './App'
import CSSReset from './components/css-reset'
import { store } from './redux/store'

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CSSReset />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
