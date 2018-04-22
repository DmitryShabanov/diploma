import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AboutContainer from './containers/AboutContainer';
import Header from './components/Header';

const Router = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutContainer} />
      </Switch>
    </div>
  </HashRouter>
);

export default Router;
