import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-t"
import pieceReducer from "./reducers/pieceReducer";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store