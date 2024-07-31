import { applyMiddleware, combineReducers } from "redux";
import thunk from "./reducers/pieceReducer"

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))