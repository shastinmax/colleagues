import { RootStateType } from '../../store';

export const selectPosition = (state: RootStateType) => state.form.positions;
