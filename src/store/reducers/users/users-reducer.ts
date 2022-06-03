import { Dispatch } from 'redux';

import { usersApi } from '../../../api/user';
import { GlobalActionType } from '../../../types/globalTypeAction';

import { InitialStateType, UserType } from './types';

const initialState = {
  success: false,
  total_pages: 0,
  total_users: 0,
  links: {
    next_url: '',
    prev_url: null,
  },
  users: [],
  params: {
    page: 1,
    count: 6,
  },
  loading: false,
  isRedirectValue: false,
};

export const usersReducer = (
  state: InitialStateType = initialState,
  action: GlobalActionType,
): InitialStateType => {
  switch (action.type) {
    case 'USERS/SET-USERS': {
      return {
        ...state,
        ...action.payload.users,
      };
    }
    case 'USER/SET-LOADING': {
      return {
        ...state,
        loading: action.payload.value,
      };
    }
    case 'USERS/SHOW-NEXT-USERS': {
      return {
        ...state,
        params: {
          ...state.params,
          page: action.payload.page,
        },
      };
    }
    case 'USERS/IS-REDIRECT': {
      return {
        ...state,
        isRedirectValue: action.payload.value,
      };
    }
    case 'APP/RESET-PAGE':
      return { ...state, params: { ...state.params, page: 1 } };
    default:
      return state;
  }
};

// action
export const setUsers = (users: UserType) =>
  ({
    type: 'USERS/SET-USERS',
    payload: {
      users,
    },
  } as const);
export const setLoading = (value: boolean) =>
  ({
    type: 'USER/SET-LOADING',
    payload: {
      value,
    },
  } as const);
export const showNextUsers = (page: number) =>
  ({
    type: 'USERS/SHOW-NEXT-USERS',
    payload: {
      page,
    },
  } as const);
export const isRedirect = (value: boolean) =>
  ({
    type: 'USERS/IS-REDIRECT',
    payload: {
      value,
    },
  } as const);
export const resetPage = (value: number) => ({ type: 'APP/RESET-PAGE', value } as const);
// thunk

export const getUsers = (page: number, count: number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await usersApi.getUsers(page, count);
    dispatch(setUsers(response.data));
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  } finally {
    dispatch(setLoading(false));
  }
};
