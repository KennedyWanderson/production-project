import { applyMiddleware, combineReducers, createStore } from "redux";
import pieceReducer from "./reducers/pieceReducer";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware())

export default store