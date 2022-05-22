import { addNewUser, setPositions, setToken } from '../form/form-reducer';

import {
  isRedirect,
  resetPage,
  setLoading,
  setUsers,
  showNextUsers,
} from './users-reducer';

export type GlobalActionType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof showNextUsers>
  | ReturnType<typeof setPositions>
  | ReturnType<typeof setToken>
  | ReturnType<typeof addNewUser>
  | ReturnType<typeof isRedirect>
  | ReturnType<typeof resetPage>;

export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
};

export type InitialStateType = {
  success: boolean;
  total_pages: number;
  total_users: number;
  links: {
    next_url: string;
    prev_url: null;
  };
  params: {
    page: number;
    count: number;
  };
  users: Array<UserType>;
  loading: boolean;
  isRedirectValue: boolean;
};
