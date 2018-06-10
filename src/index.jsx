import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './utils/i18n';

import './styles/reset.scss';

const renderApp = () => {
  const Router = require('./Router.jsx').default;

  const component = (
    <AppContainer>
      <Router />
    </AppContainer>
  );

  render(component, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./Router.jsx', () => renderApp());
}

renderApp();
