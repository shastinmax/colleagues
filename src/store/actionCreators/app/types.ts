import { setErrorValue, setInitialized } from './actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setInitialized>
  | ReturnType<typeof setErrorValue>;
