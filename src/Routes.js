import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './pages/home';
import Account from './pages/account';
import GraphiQL from './pages/graphiql';


export default () => (
  <Switch>
    <Route exact path="/" component={GraphiQL} />
    <Route path="/account" component={Account} />
  </Switch>
);
