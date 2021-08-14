import boardTypes from "./board.types";

export const togglePower = () => ({
    type: boardTypes.SET_POWER
});

export const toggleStart = () => ({
    type: boardTypes.SET_START
});

export const toggleStrict = () => ({
    type: boardTypes.SET_STRICT
});

export const updateSteps = () => ({
    type: boardTypes.SET_STEPS
});

export const setChildren = newArr => ({
    type: boardTypes.SET_CHILDREN,
    payload: [...newArr]
});

export const userMove = move => ({
    type: boardTypes.USER_MOVE,
    payload: move
});

export const setShouldRun = val => ({
    type: boardTypes.SET_SHOULD_RUN,
    payload: val
});