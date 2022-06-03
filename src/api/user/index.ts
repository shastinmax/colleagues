import { PathAdditionalEndpoint } from '../../common/enums/Additional_Endpoints';
import { UserType } from '../../store/reducers/users/types';
import { instance } from '../config';

export const usersApi = {
  getUsers(page: number, count: number) {
    return instance.get<UserType>(`${PathAdditionalEndpoint.USERS}`, {
      params: { page, count },
    });
  },
};
