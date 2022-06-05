import { RootStateType } from '../../store';

export const selectErrorValue = (state: RootStateType) => state.app.errorMessage;
