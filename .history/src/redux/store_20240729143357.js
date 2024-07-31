import { applyMiddleware, combineReducers } from "redux";
import thunk 

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))