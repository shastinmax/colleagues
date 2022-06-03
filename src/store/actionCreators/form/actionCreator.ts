import { InitialStateType, PositionType } from '../../reducers/form/types';

export const setPositions = (data: PositionType) =>
  ({
    type: 'FORM/SET-POSITIONS',
    payload: {
      data,
    },
  } as const);
export const setToken = (token: string) =>
  ({
    type: 'FORM/SET-TOKEN',
    payload: {
      token,
    },
  } as const);
