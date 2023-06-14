import {makeRandomArray} from './GameUtils';

export const NEXT_TASK = 'NEXT_TASK';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const START_GAME  = 'START_GAME';
export const SILENCE_TASK  = 'SILENCE_TASK';
export const TOGGLE_FEEDBACK  = 'TOGGLE_FEEDBACK';


export const startGame = () => {
    return {
        type: START_GAME
    };
};

export const updateScore = (input) => {
    const reg = /[^0-9]/;
    let res = input.replace(reg, '');
    let inputArray = res.split("");
    return {
        type: UPDATE_SCORE,
        payload: {inputArray}
    };
};

export const nextTask = () => {
    // TODO make this random
    let nextTask = makeRandomArray({arrayLength: 5, greatestInteger: 9});
    return {
        type: NEXT_TASK,
        payload: {nextTask}
    };
};

export const silenceTask = () => {
    return {
        type: SILENCE_TASK
    };
};

export const toggleFeedback = () => {
    return {
        type: TOGGLE_FEEDBACK
    };
};
