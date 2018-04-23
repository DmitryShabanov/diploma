import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';

const Router = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </div>
  </HashRouter>
);

export default Router;
