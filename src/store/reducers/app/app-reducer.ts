import { GlobalActionType } from '../../actionCreators/app/types';

import { InitialStateType } from './types';

const initialState: InitialStateType = {
  initialized: false,
  errorMessage: null,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: GlobalActionType,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_INITIALIZED':
      return { ...state, initialized: action.value };
    case 'APP/SET_ERROR_VALUE':
      return { ...state, errorMessage: action.value };
    default:
      return state;
  }
};
