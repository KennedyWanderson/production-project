import { applyMiddleware, combineReducers, configureSc } from "redux";
import thunk from "redux-thunk"
import pieceReducer from "./reducers/pieceReducer";

const rootReducer = combineReducers({
    pieces: pieceReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store