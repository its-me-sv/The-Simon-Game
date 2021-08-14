import boardTypes from "./board.types";

// Utility Functions
import randomRange from "../../utils/randomRange";
import cn  from "./board.data";
import playSound from "../../utils/playSound";

// Initial State
const INITIAL_STATE = {
    power: false,
    start: false,
    strict: false,
    steps: [randomRange()],
    children: [...cn],
    userMoves: [],
    shouldRun: false
};

const boardReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case boardTypes.SET_POWER: 
            return {
                ...state,
                power: !state.power,
                steps: [randomRange()],
                children: [...cn],
                userMoves: []
            };
        case boardTypes.SET_START:
            return {
                ...state,
                start: !state.start,
                steps: [randomRange()],
                children: [...cn]
            };
        case boardTypes.SET_STRICT:
            return {
                ...state,
                strict: !state.strict
            };
        case boardTypes.SET_STEPS: {
            const nextPlace = randomRange();
            return {
                ...state,
                steps: [...state.steps, nextPlace]
            };
        }
        case boardTypes.SET_CHILDREN:
            return {
                ...state,
                children: [...payload]
            };
        case boardTypes.USER_MOVE: {
            let umCpy = [...state.userMoves, payload];
            if (umCpy.join("") === state.steps.slice(0, umCpy.length).join("")) {
                if (umCpy.length === 20) {
                    window.alert("You won the game");
                    return {
                        power: false,
                        start: false,
                        strict: false,
                        steps: [randomRange()],
                        children: [...cn],
                        userMoves: [],
                        shouldRun: false
                    };
                }
                if (umCpy.length === state.steps.length) {
                    const nextPlace1 = randomRange();
                    return {
                        ...state,
                        steps: [...state.steps, nextPlace1],
                        start: !state.start,
                        shouldRun: true,
                        userMoves: []
                    };
                }
                return {
                    ...state,
                    userMoves: [...umCpy]
                };
            }
            playSound("4");
            if (state.strict === true)
                return {
                    ...state,
                    start: false,
                    userMoves: [],
                    steps: [randomRange()],
                    shouldRun: true
                };
            return {
                ...state,
                start: false,
                userMoves: [],
                shouldRun: true
            };
        }
        case boardTypes.SET_SHOULD_RUN:
            return {
                ...state,
                shouldRun: payload
            };
        default:
            return state;
    }
};

export default boardReducer;