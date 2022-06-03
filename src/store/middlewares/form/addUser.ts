import { Dispatch } from 'redux';

import { formApi } from '../../../api/form';
import { UserType } from '../../../types/userType';
import { isRedirect, resetPage, setLoading } from '../../reducers/users/users-reducer';
import { RootStateType } from '../../store';

export const addUser =
  (value: UserType) => async (dispatch: Dispatch, getState: () => RootStateType) => {
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
