import React from 'react';
import renderer from 'react-test-renderer';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import gameReducer from './Game/GameReducers';
import App from './App';

const rootReducer = gameReducer;

const store = createStore(
    rootReducer
);


describe('App (Snapshot)', () => {
  it('App renders', () => {
      const component = renderer.create(
          <Provider store={store}><App /></Provider>
      );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
