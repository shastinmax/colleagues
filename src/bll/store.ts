import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

import {usersReducer} from "./reducers/users/usersReducer";

export type RootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    users: usersReducer
})
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))