import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BinaryTreeContainer from './containers/BinaryTreeContainer';
import Header from './components/Header';
import About from './components/About';

const Router = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/binary-tree" component={BinaryTreeContainer} />
      </Switch>
    </div>
  </HashRouter>
);

export default Router;
