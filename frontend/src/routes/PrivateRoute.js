// Lib imports
import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {getAuthToken} from 'utils/auth-singleton'
import DefaultLayout from 'components/DefaultLayout'
import messages from 'messages/cashbackRewards'

const PrivateRoute = ({component: Component, ...rest}) => {
  const authToken = getAuthToken()

  return (
    <Route
      {...rest}
      render={props => {
        if (!authToken) {
          return (
            <Redirect
              to={{pathname: '/login', state: {from: props.location}}}
            />
          )
        }
        // authorised so return component
        return (
          <DefaultLayout
            title={messages.TITLE}
            pathname={props.location.pathname}
            history={props.history}
          >
            <Component {...props} />
          </DefaultLayout>
        )
      }}
    />
  )
}

export default PrivateRoute
