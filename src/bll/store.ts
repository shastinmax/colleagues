import { useDispatch } from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"

import {GlobalActionType} from "./reducers/users/types";
import {usersReducer} from "./reducers/users/usersReducer";

export type RootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    users: usersReducer
})
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type AppActionType = GlobalActionType
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootStateType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();