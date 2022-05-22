import axios from 'axios';

import { setToken } from '../bll/reducers/form/form-reducer';
import { UserType } from '../bll/reducers/users/types';

import { AddUserType, AnswerUser } from './types';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

// USERS
export const usersApi = {
  getUsers(page: number, count: number) {
    return instance.get<UserType>(`users`, { params: { page, count } });
  },
};

// FORM + TOKEN
export const formApi = {
  getToken() {
    return instance.get<{ succcess: boolean; token: string }>('token');
  },
  getPositions() {
    return instance.get('positions');
  },
  addUser(value: AddUserType, token: string) {
    return instance.post<AnswerUser>('user', value, {
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
