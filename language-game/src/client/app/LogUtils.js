// LogUtils.js
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

export const logger = createLogger({
  stateTransformer,
});
