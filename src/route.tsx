import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './Home'

function Routes() {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
    </HashRouter>
  )
}

export default Routes
