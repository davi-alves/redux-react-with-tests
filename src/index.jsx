import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

import reducer from './reducer'
import { setState } from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/App'
import { VotingContainer } from './components/Voting'
import { ResultsContainer } from './components/Results'
import './style.css'

// socket
const socket = io.connect(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', (state) => {
  store.dispatch(setState(state))
})
// store
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore)
const store = createStoreWithMiddleware(reducer)
// routes
const routes = <Route component={App}>
  <Route path='/results' component={ResultsContainer}/>
  <Route path='/' component={VotingContainer}/>
</Route>

render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
