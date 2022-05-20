import axios from "axios";

import {UserType} from "../bll/reducers/users/types";

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})
export const usersApi={
    getUsers(page:number,count:number){
        return instance.get<UserType>(`users`, {params: {page, count}})
    },
    getPositions(){
        return instance.get('positions')
    }

}