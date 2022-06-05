import { setPositions, setToken } from '../store/actionCreators/form/actionCreator';
import {
  addNewUser,
  isRedirect,
  resetPage,
  setLoading,
  setUsers,
  showNextUsers,
} from '../store/actionCreators/user/actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof showNextUsers>
  | ReturnType<typeof setPositions>
  | ReturnType<typeof setToken>
  | ReturnType<typeof addNewUser>
  | ReturnType<typeof isRedirect>
  | ReturnType<typeof resetPage>;
