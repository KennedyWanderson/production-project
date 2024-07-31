import { applyMiddleware, combineReducers, configureStore } from "redux";
import thunk from "redux-thunk"
import pieceReducer from "./reducers/pieceReducer";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = configureStore(rootReducer, applyMiddleware(thunk))

export default store