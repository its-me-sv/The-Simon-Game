import { combineReducers } from "redux";

// Reducers
import boardReducer from "./board/board.reducer";

const rootReducer = combineReducers({
    board: boardReducer
});

export default rootReducer;