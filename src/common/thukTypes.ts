import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {RootStateType} from "../bll/store";

export type ThunkType = ThunkAction<void, RootStateType, unknown, AnyAction>;