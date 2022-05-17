import {TypedUseSelectorHook, useSelector} from "react-redux";

import {RootStateType} from "../../bll/store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;