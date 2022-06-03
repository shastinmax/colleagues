import { UserType } from '../../reducers/users/types';

export const addNewUser = (value: UserType) =>
  ({
    type: 'FORM/ADD-NEW-USER',
    payload: {
      value,
    },
  } as const);
