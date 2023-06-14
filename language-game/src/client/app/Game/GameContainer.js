import React from 'react';
import { connect } from 'react-redux';
import {
    startGame,
    toggleFeedback,
    silenceTask,
    updateScore,
    nextTask
} from './GameActions';
import Game from './Display/Game';


const mapStateToProps = (state) => {
    let currProps;
    if(state.toJS) {
      currProps = state.toJS()
    } else {
      currProps = state
    }
    return currProps;
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch(startGame());
      dispatch(nextTask());
    },
    handleGrading: (input) => {
      dispatch(updateScore(input));
      dispatch(toggleFeedback());
    },
    handleNextTask: () => {
      dispatch(toggleFeedback());
      dispatch(nextTask());
    },
    handleFinishedPlaying: () => {
      dispatch(silenceTask());
    }
  };
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
