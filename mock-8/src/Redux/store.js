
import { legacy_createStore as createrStore, combineReducers , applyMiddleware } from "redux";

import thunk from "redux-thunk"
import { reducer } from "./reducer";

export const combine  = combineReducers({
    reducer
})

export const store = createrStore(combine, applyMiddleware(thunk));