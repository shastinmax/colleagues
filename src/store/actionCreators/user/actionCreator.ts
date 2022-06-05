import { UserType } from '../../reducers/users/types';

export const addNewUser = (value: UserType) =>
  ({
    type: 'FORM/ADD-NEW-USER',
    payload: {
      value,
    },
  } as const);
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
