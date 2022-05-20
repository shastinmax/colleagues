import {Dispatch} from "redux";

import {usersApi} from "../../../api/api";
import {GlobalActionType} from "../users/types";
import {setLoading} from "../users/users-reducer";

type PositionsType = {
    id: string,
    name: string

}
export type InitialStateTye = {
    success: boolean,
    positions: Array<PositionsType>
}
const initialState = {
    success: true,
    positions: []
}

export const formReducer = (state: InitialStateTye=initialState, action: GlobalActionType): InitialStateTye => {
    switch (action.type) {
        case "FORM/SET-POSITIONS":{
            return {
                ...state,...action.payload.data
            }
        }
        default: {
            return state
        }
    }
}
// actions
export const setPositions = (data: InitialStateTye) => ({
    type: 'FORM/SET-POSITIONS',
    payload: {
        data
    }
} as const)

// thunks

export const getPositions = () => async (dispatch:Dispatch)=>{
    dispatch(setLoading(true))
    try {
        const response = await usersApi.getPositions()
        dispatch(setPositions(response.data))
    }
    catch (e){
        // eslint-disable-next-line no-alert
        alert(e)
    }
    finally {
        dispatch(setLoading(false))
    }
}

