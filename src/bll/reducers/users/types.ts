import {setUsers} from "./usersReducer";

export type GlobalActionType = ReturnType<typeof setUsers>

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
    total_pages: number,
    total_users: number,
    links: {
        next_url: string,
        prev_url: null
    },
    params: {
        page: number,
        count: number,
    }
    users: Array<UserType>
}