
// Core
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Pages
import App from './App';

const reducer = (state = {}, actions) => state;

const store = createStore(reducer);

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);


