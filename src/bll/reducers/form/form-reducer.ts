import { Dispatch } from 'redux';

import { formApi, usersApi } from '../../../api/api';
import { AddUserType } from '../../../api/types';
import { ThunkType } from '../../../common/thukTypes';
import { RootStateType } from '../../store';
import { GlobalActionType } from '../users/types';
import { isRedirect, resetPage, setLoading } from '../users/users-reducer';

type PositionsType = {
  id: string;
  name: string;
};
export type InitialStateTye = {
  success: boolean;
  positions: Array<PositionsType>;
  token: string;
};
const initialState = {
  success: true,
  positions: [],
  token: '',
};

export const formReducer = (
  state: InitialStateTye = initialState,
  action: GlobalActionType,
): InitialStateTye => {
  switch (action.type) {
    case 'FORM/SET-POSITIONS': {
      return {
        ...state,
        ...action.payload.data,
      };
    }
    case 'FORM/SET-TOKEN': {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case 'FORM/ADD-NEW-USER': {
      return {
        ...state,
        ...action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};
// actions
export const setPositions = (data: InitialStateTye) =>
  ({
    type: 'FORM/SET-POSITIONS',
    payload: {
      data,
    },
  } as const);
export const setToken = (token: string) =>
  ({
    type: 'FORM/SET-TOKEN',
    payload: {
      token,
    },
  } as const);
export const addNewUser = (value: AddUserType) =>
  ({
    type: 'FORM/ADD-NEW-USER',
    payload: {
      value,
    },
  } as const);

// thunks

export const getPositions = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await formApi.getPositions();
    dispatch(setPositions(response.data));
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  } finally {
    dispatch(setLoading(false));
  }
};
export const getToken = () => async (dispatch: Dispatch) => {
  try {
    const response = await formApi.getToken();
    dispatch(setToken(response.data.token));
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(e);
  }
};
export const addUser =
  (value: AddUserType) => async (dispatch: Dispatch, getState: () => RootStateType) => {
    try {
      dispatch(setLoading(true));
      const { token } = getState().form;
      const response = await formApi.addUser(value, token);
      dispatch(isRedirect(response.data.success));
      const page = 1;
      dispatch(resetPage(page));
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('max');
    } finally {
      dispatch(setLoading(false));
    }
  };
