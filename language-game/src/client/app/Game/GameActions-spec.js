import * as sinon from 'sinon';

import * as actions from './GameActions';
import * as GameUtils from './GameUtils';

const _testSimpleAction = (actionFn=null, actionName='', actionConstant=null) => {
  describe(`actions.${actionName}`, () => {
     it('should create an action', () => {

       const expectedAction = {
         type: actionConstant,
       };
       expect(actionFn()).toEqual(expectedAction);
     });
   });
};

describe('actions.updateScore', () => {
  it('should create an action with an updated score', () => {
    const expectedAction = {
      type: actions.UPDATE_SCORE,
      payload: {inputArray: ['0', '1', '0']}
    };
    expect(actions.updateScore('01 0')).toEqual(expectedAction)
  })
})

describe('actions.startGame', () => {
  it('should create an action to start game', () => {

    const expectedAction = {
      type: actions.START_GAME,
    };
    expect(actions.startGame()).toEqual(expectedAction)
  })
})

describe('actions.nextTask', () => {
  it('should create an action to load next task', () => {
    const arr = [4, 4, 4, 4, 4];
    sinon.stub(GameUtils, 'makeRandomArray').returns(arr);
    const expectedAction = {
        type: actions.NEXT_TASK,
        payload: {nextTask: arr}
    };
    expect(actions.nextTask()).toEqual(expectedAction)
  })
})

_testSimpleAction(
    actions.startGame,
    'actions.startGame',
    actions.START_GAME
);

_testSimpleAction(
    actions.silenceTask,
    'actions.silenceTask',
    actions.SILENCE_TASK
);

_testSimpleAction(
    actions.toggleFeedback,
    'actions.toggleFeedback',
    actions.TOGGLE_FEEDBACK
);
