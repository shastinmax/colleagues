import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { appReducer } from './reducers/app/app-reducer';
import { formReducer } from './reducers/form/form-reducer';
import { GlobalActionType } from './reducers/users/types';
import { usersReducer } from './reducers/users/users-reducer';

const reducers = combineReducers({
  users: usersReducer,
  app: appReducer,
  form: formReducer,
});
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
export type RootStateType = ReturnType<typeof reducers>;
export type AppActionType = GlobalActionType;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootStateType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
