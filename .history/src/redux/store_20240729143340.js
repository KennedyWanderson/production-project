import { applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thun))