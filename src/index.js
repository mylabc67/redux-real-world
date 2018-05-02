import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/root'
import coreStore from './store/coreStore'

const store = coreStore()

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
