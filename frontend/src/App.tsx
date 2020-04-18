// library imports
import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.scss'
import routes from 'routes'
import PublicRoute from 'routes/Public'
import PublicOnlyRoute from 'routes/PublicOnly'
import PrivateRoute from 'routes/Private'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          if (route.private) {
            return <PrivateRoute key={route.path} {...route} />
          } else if (route.publicOnly) {
            return <PublicOnlyRoute key={route.path} {...route} />
          } else {
            return <PublicRoute key={route.path} {...route} />
          }
        })}
      </Switch>
    </Router>
  )
}

export default App
