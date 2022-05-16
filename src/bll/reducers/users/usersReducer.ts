import {GlobalType, InitialStateType, UserType} from "./types";

const initialState = {
    success: false,
    page: 0,
    total_pages: 0,
    total_users: 0,
    count: 0,
    links: {
        next_url: "",
        prev_url: null
    },
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: GlobalType): InitialStateType => {
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

export const getUsesAC = (users: UserType) => ({
        type: 'USERS/GET-USERS',
        payload: {
            users
        }
    } as const
)