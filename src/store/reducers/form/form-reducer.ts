import { InitialStateType } from './types';

import { GlobalActionType } from 'store/actionCreators/form/types';

const initialState: InitialStateType = {
  isSuccess: false,
  positions: [],
  token: '',
};

export const formReducer = (
  state: InitialStateType = initialState,
  action: GlobalActionType,
): InitialStateType => {
  switch (action.type) {
    case 'FORM/SET-POSITIONS': {
      return { ...state, ...action.payload.data };
    }
    case 'FORM/SET-TOKEN': {
      return { ...state, token: action.payload.token };
    }
    default:
      return state;
  }
};
