import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import BinaryTreeContainer from './containers/BinaryTreeContainer';
import AvlTreeContainer from './containers/AvlTreeContainer';

const Router = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/binary-tree" component={BinaryTreeContainer} />
        <Route exact path="/avl-tree" component={AvlTreeContainer} />
      </Switch>
    </div>
  </HashRouter>
);

export default Router;
