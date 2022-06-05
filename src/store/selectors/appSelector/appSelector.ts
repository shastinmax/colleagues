import { RootStateType } from '../../store';

export const selectInitialized = (state: RootStateType) => state.app.initialized;
