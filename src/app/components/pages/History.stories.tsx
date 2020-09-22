import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { History } from 'components/pages/History'
import { configureStore } from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

export default {
  title: 'pages/History',
  component: History,
} as Meta

export const Normal = (props) => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <History {...props} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
