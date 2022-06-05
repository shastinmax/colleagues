import { Dispatch } from 'redux';

import { usersApi } from '../../../api/user';
import { ThunkType } from '../../../types/thunkType';
import { setLoading, setUsers } from '../../actionCreators/user/actionCreator';

export const getUsers =
  (page: number, count: number): ThunkType =>
  async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await usersApi.getUsers(page, count);

      dispatch(setUsers(response.data));
    } catch (err) {
      // const{message}= err as AxiosError
      // eslint-disable-next-line no-alert
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
