import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import IndexView from './views/IndexView'
import RetrieveView from './views/RetrieveView'
import SubmitView from './views/SubmitView'

function App() {
  return (
    <div className='container mx-auto '>
      <h1 className='pt-10 text-lg'>SECRET SHARE</h1>
      <span className='text-xs uppercase text-chambray-600'>one way share using pub/priv keys</span>
      <main className='flex justify-center my-10'>
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
      </main>
      <div className='text-chambray-600 text-center'>Developed by Christoffer A Træen - GitHub</div>
    </div>
  )
}

export default App
