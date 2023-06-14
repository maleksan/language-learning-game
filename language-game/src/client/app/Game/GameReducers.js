import * as gameActions from './GameActions';
import { Record  } from 'immutable';
import {getListLevenshtein} from './GameUtils';

const GameState = new Record({
  currentTask: null,
  hasBegun: false,
  audioShouldPlay: false,
  shouldDisplayFeedback: false,
  tasksCorrect: 0,
  digitsCorrect: 0,
  totalDigits: 0,
  userInput: '',
  totalTasks: 0
});

const gameReducer = (state = new GameState(), {payload, type}) => {
  switch (type) {
    case gameActions.START_GAME:
      return state.merge({hasBegun: true});

    case gameActions.UPDATE_SCORE:
        const inputString = payload.inputArray.join('');
        let digitsWrong = getListLevenshtein(state.currentTask.toJS(), payload.inputArray);
        return state.merge({
            tasksCorrect: digitsWrong === 0 ? state.tasksCorrect + 1 : state.tasksCorrect,
            digitsCorrect: state.currentTask.toJS().length - digitsWrong,
            totalDigits: state.digitsCorrect + state.currentTask.toJS().length,
            userInput: inputString,
            totalTasks: state.totalTasks + 1
        });

    case gameActions.NEXT_TASK:
        return state.merge({
            currentTask: payload.nextTask,
            audioShouldPlay: true
        });

    case gameActions.TOGGLE_FEEDBACK:
        return state.merge({
            shouldDisplayFeedback: !state.shouldDisplayFeedback
        });


    case gameActions.SILENCE_TASK:
      return state.merge({audioShouldPlay: false});

    default:
      return state;
  }
}

export default gameReducer;
