import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';

const Router = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={HomeContainer} />
    </div>
  </HashRouter>
);

export default Router;
