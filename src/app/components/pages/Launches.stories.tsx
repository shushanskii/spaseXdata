import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Launches } from 'components/pages/Launches'
import { configureStore } from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

export default {
  title: 'pages/Launches',
  component: Launches,
} as Meta

export const Normal = (props) => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Launches {...props} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
