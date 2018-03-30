import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Account from './pages/account';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/account' component={Account} />
  </Switch>
);
