import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { bucketRoute } from './lib/routes/bucket.route'
import { secretRoute } from './lib/routes/secret.route'
import IndexView from './views/IndexView'
import RetrieveView from './views/RetrieveView'
import SubmitView from './views/SubmitView'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container mx-auto pb-10'>
        <h1 className='pt-10 text-lg'>SECRET SHARE</h1>
        <span className='text-xs uppercase text-chambray-600'>
          one way share using pub/priv keys
        </span>
        <main className='flex justify-center my-10'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <IndexView />
              </Route>
              <Route path={bucketRoute.viewBucket}>
                <RetrieveView />
              </Route>
              <Route path={secretRoute.submitSecret}>
                <SubmitView />
              </Route>
            </Switch>
          </Router>
        </main>
        <div className='text-chambray-600 text-center border-chambray-600 text-xs'>
          Developed by Christoffer A Træen -
          <a target='_blank' href='https://github.com/freshfish70/secret-share'>
            {' '}
            GitHub
          </a>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
