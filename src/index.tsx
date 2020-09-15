import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'app/App'
import { configureStore } from 'store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
