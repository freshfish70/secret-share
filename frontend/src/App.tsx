import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import IndexView from './views/IndexView'
import RetrieveView from './views/RetrieveView'
import SubmitView from './views/SubmitView'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <IndexView />
        </Route>
        <Route path='/retrieve/:shareId'>
          <RetrieveView />
        </Route>
        <Route path='/submit/:shareId'>
          <SubmitView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
