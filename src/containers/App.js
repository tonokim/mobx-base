
import React, { Component } from 'react'
import { hot, setConfig } from 'react-hot-loader';
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { Loader } from '@/components';

const Page1 = Loadable({
  loader: () => import('./page1'),
  loading: Loader,
})

const Page2 = Loadable({
  loader: () => import('./page2'),
  loading: Loader,
})

class App extends Component {
  render() {
    return (
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
    )
  }
}

// setConfig({ logLevel: 'debug' });

export default hot(module)(App);

