import { PositionType } from '../../store/reducers/form/types';
import { UserType } from '../../types/userType';
import { instance } from '../config';

import { AnswerUserType } from './types';

export const formApi = {
  getPositions() {
    return instance.get<PositionType>('positions');
  },
  addUser(value: UserType, token: string) {
    return instance.post<AnswerUserType>('users', value, {
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
