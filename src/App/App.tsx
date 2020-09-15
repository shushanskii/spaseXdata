import React from 'react'
import { GlobalStyle } from 'components/theme/globalStyles'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'components/pages/Home'
import { Launches } from 'components/pages/Launches'
import { History } from 'components/pages/History'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path={'/history'} component={History} />
        <Route path={'/launches'} component={Launches} />
        <Route path={'/'} component={Home} exact={true} />
      </Switch>
    </>
  )
}
