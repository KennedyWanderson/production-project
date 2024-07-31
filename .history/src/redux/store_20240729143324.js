import { combineReducers } from "redux";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(roo)