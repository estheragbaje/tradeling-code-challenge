import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import CSSReset from './components/css-reset'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <CSSReset />
    <App />
  </Provider>,
  document.getElementById('root')
)
