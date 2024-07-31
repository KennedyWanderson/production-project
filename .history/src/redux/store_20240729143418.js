import { applyMiddleware, combineReducers } from "redux";
import thunk from "m"

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))