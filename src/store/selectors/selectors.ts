import { RootStateType } from '../store';
// user
export const selectUsers = (state: RootStateType) => state.users.users;
export const selectPage = (state: RootStateType) => state.users.params.page;
export const selectCount = (state: RootStateType) => state.users.params.count;
export const selectTotalPages = (state: RootStateType) => state.users.total_pages;
export const selectIsRedirect = (state: RootStateType) => state.users.isRedirectValue;

// app
export const selectInitialized = (state: RootStateType) => state.app.initialized;

// form
export const selectPosition = (state: RootStateType) => state.form.positions;

// error
export const selectErrorValue = (state: RootStateType) => state.app.errorMessage;
