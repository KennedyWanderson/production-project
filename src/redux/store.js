import { applyMiddleware, combineReducers, createStore } from "redux";
import pieceReducer from "./reducers/pieceReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store