import React from 'react'
import { GlobalStyle } from 'components/theme/globalStyles'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'components/pages/Home'
import { Launches } from 'components/pages/Launches'
import { History } from 'components/pages/History'
import { Error } from 'components/modals/Error'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path={'/history'} component={History} />
        <Route path={'/launches'} component={Launches} />
        <Route path={'/'} exact={true} component={Home} />
      </Switch>
      <Error />
    </>
  )
}
