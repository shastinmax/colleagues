import React, {useEffect} from 'react';

import {getUsers, showNextUsers} from "../../../bll/reducers/users/usersReducer";
import {
    selectCount,
    selectLoading,
    selectPage,
    selectTotalPages,
    selectUsers
} from "../../../bll/selectors/selectors";
import {useTypedDispatch} from "../../../bll/store";
import {useAppSelector} from "../../../common/hook/useAppSelectorHook";
import {Preloader} from "../../../common/Preloader/Preloader";
import {fixLengthText} from "../../../utils/fixLengthText";

import {User} from "./User/User";
import s from './Users.module.scss'

export const Users = () => {
    const dispatch = useTypedDispatch()
    const page = useAppSelector(selectPage)
    const count = useAppSelector(selectCount)
    const users = useAppSelector(selectUsers)
    const totalPage = useAppSelector(selectTotalPages)
    const loading = useAppSelector(selectLoading)

    useEffect(() => {
        dispatch(getUsers(page, count))
    }, [dispatch,page])

    const onHandlerShowMore=()=>{
        const number = 1
        dispatch(showNextUsers(page+number))
    }

    return <div className='container'>
        {loading && <Preloader/>}
        <h1 className={s.users__title}>Working with GET request</h1>
        <div className={s.users__wrapper}>
            {users.map(user => (
                <User key={user.id} email={fixLengthText(user.email)} photo={user.photo}
                      phone={user.phone} name={fixLengthText(user.name)}
                      position={user.position}/>))
            }

        </div>
        <div className={s.users__wrapperBtn}>
            {totalPage !== page && <button type='button' onClick={onHandlerShowMore} className={s.users__wrapperBtn_btn}>Show more</button>}
        </div>
    </div>
}

