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
    }
}

export const usersReducer = (state: InitialStateType = initialState, action: GlobalActionType): InitialStateType => {
    switch (action.type) {
        case "USERS/GET-USERS": {
            return {
                ...state, ...action.payload.users
            }
        }
        default:
            return state
    }
}

// action
export const setUsers = (users: UserType) => ({
        type: 'USERS/GET-USERS',
        payload: {
            users
        }
    } as const
)

// thunk

export const getUsers = (page: number, count: number) => async (dispatch: Dispatch) => {
    try {
        const response = await usersApi.getUsers(page, count)
        dispatch(setUsers(response.data))
    } catch (err) {
// eslint-disable-next-line no-alert
        alert(err)
    }

}