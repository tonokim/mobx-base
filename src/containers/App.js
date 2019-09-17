
import React, { Component } from 'react'
import { hot, setConfig } from 'react-hot-loader';
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { Loader } from '@/components';

const AsyncPage = (page) => Loadable({
  loader: () => import(`./${page}`),
  loading: Loader,
})

class App extends Component {
  render() {
    return (
      <Switch>
        <Route 
          exact
          path="/" 
          component={AsyncPage('page1')}
        />
        <Route 
          path="/page1" 
          component={AsyncPage('page1')}
        />
        <Route 
          path="/page2" 
          component={AsyncPage('page2')}
        />
      </Switch>
    )
  }
}

// setConfig({ 
//   logLevel: 'debug',
//   hotHooks: true,
// });

export default hot(module)(App);

