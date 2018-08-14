import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import NotFound from './pages/404'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
