import {getUsesAC} from "./usersReducer";

export type GlobalType = ReturnType<typeof getUsesAC>

export type UserType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: string,
    registration_timestamp: number,
    photo: string
}

export type InitialStateType = {
    success: boolean,
    page: number,
    total_pages: number,
    total_users: number,
    count: number,
    links: {
        next_url: string,
        prev_url: null
    },
    users: Array<UserType>
}