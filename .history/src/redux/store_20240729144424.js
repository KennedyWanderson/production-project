import { applyMiddleware, combineReducers } from "redux";
import thunk from "./reducers/pieceReducer"
import pieceReducer from "./reducers/pieceReducer";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store