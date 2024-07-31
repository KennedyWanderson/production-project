import { applyMiddleware, combineReducers } from "redux";
import thunk from "./reducers/pieceReducer"

const rootReducer = combineReducers({
    pieces: pie,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store