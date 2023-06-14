import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from './LogUtils';

import App from './App'
import gameReducer from './Game/GameReducers';

// In theory, combineReducers goes here
const rootReducer = gameReducer;

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
