import React from 'react';
import configureStore from 'redux-mock-store'

import {mount} from 'enzyme';
import sinon from 'sinon';
import * as redux from 'react-redux';
import {connect} from 'react-redux';
import GameContainer from './GameContainer';

const middlewares = []
const mockStore = configureStore(middlewares)


describe('connect', () => {
  const initialState = {}
  const store = mockStore(initialState)

    it('connect actions to the store', () => {
        var spy = sinon.spy(redux, "connect");
        const component = mount(
            <redux.Provider store={store}>
              <GameContainer />
            </redux.Provider>
        );
        expect(spy.called);
    });
});
