import { applyMiddleware, combineReducers } from "redux";
import 

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))