import {RootStateType} from "../store";

export const selectPage=(state:RootStateType)=>state.users.params.page
export const selectCount=(state:RootStateType)=>state.users.params.count
export const selectUsers=(state:RootStateType)=>state.users.users
export const selectTotalPages=(state:RootStateType)=>state.users.total_pages
export const selectLoading=(state:RootStateType)=>state.users.loading