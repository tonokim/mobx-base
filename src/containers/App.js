
import React, { Component, Suspense, lazy } from 'react'
import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { Loader } from '@/components';

const Page1 = lazy(() => import('./page1'));
const Page2 = lazy(() => import('./page2'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route 
            exact
            path="/" 
            component={Page1}
          />
          <Route 
            path="/page1" 
            component={Page1}
          />
          <Route 
            path="/page2" 
            component={Page2}
          />
        </Switch>
      </Suspense>
    )
  }
}

// setConfig({ logLevel: 'debug' });

export default hot(module)(App);

