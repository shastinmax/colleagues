import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootStateType } from '../store/store';

export type ThunkType = ThunkAction<void, RootStateType, unknown, AnyAction>;
