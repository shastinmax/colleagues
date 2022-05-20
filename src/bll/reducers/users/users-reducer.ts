import {Dispatch} from "redux";

import {usersApi} from "../../../api/api";

import {GlobalActionType, InitialStateType, UserType} from "./types";

const initialState = {
    success: false,
    total_pages: 0,
    total_users: 0,
    links: {
        next_url: "",
        prev_url: null
    },
    users: [],
    params: {
        page: 1,
        count: 6,
    },
    loading:false
}

export const usersReducer = (state: InitialStateType = initialState, action: GlobalActionType): InitialStateType => {
    switch (action.type) {
        case "USERS/SET-USERS": {
            return {
                ...state, ...action.payload.users
            }
        }
        case "USER/SET-LOADING":{
            return {
                ...state,loading:action.payload.value
            }
        }
        case "USERS/SHOW-NEXT-USERS":{
            return {
                ...state,params:{
                    ...state.params,page:action.payload.page
                }
            }

        }
        default:
            return state
    }
}

// action
export const setUsers = (users: UserType) => ({
        type: 'USERS/SET-USERS',
        payload: {
            users
        }
    } as const
)
export const setLoading = (value:boolean)=>({
        type: 'USER/SET-LOADING',
        payload:{
            value
        }
    }as const
)
export const showNextUsers = (page:number) => ({
        type: 'USERS/SHOW-NEXT-USERS',
        payload: {
            page
        }
    } as const
)

// thunk

export const getUsers = (page: number, count: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await usersApi.getUsers(page, count)
        dispatch(setUsers(response.data))
    } catch (err) {
// eslint-disable-next-line no-alert
        alert(err)
    }
finally {
        dispatch(setLoading(false))
    }
}

