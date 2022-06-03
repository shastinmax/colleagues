import { Dispatch } from 'redux';

import { formApi } from '../../../api/form';
import { ThunkType } from '../../../types/thunkType';
import { setPositions } from '../../actionCreators/form/actionCreator';
import { setLoading } from '../../reducers/users/users-reducer';

export const getPositions = (): ThunkType => async (dispatch: Dispatch) => {
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
