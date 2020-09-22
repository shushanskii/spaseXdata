import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Home } from 'components/pages/Home'
import { configureStore } from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

export default {
  title: 'pages/Home',
  component: Home,
} as Meta

export const Normal = (props) => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Home {...props} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
Normal.args = {}
