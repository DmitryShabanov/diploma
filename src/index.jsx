import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

const renderApp = () => {
  const Router = require('./Router.jsx').default;

  const component = (
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>
  );

  render(component, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./Router.jsx', () => renderApp());
}

renderApp();
