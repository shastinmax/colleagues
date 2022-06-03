import { setPositions, setToken } from './actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setPositions>
  | ReturnType<typeof setToken>;
