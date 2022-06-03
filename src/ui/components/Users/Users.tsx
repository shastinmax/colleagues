import React, { useEffect } from 'react';

import { useAppSelector } from '../../../common/hook/useAppSelectorHook';
import { Preloader } from '../../../common/Preloader/Preloader';
import { getUsers, showNextUsers } from '../../../store/reducers/users/users-reducer';
import {
  selectCount,
  selectInitialized,
  selectPage,
  selectTotalPages,
  selectUsers,
} from '../../../store/selectors/selectors';
import { useTypedDispatch } from '../../../store/store';
import { fixLengthText } from '../../../utils/fixLengthText';

import { User } from './User/User';
import s from './Users.module.scss';

export const Users = () => {
  const dispatch = useTypedDispatch();
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);
  const users = useAppSelector(selectUsers);
  const totalPage = useAppSelector(selectTotalPages);
  const initialized = useAppSelector(selectInitialized);
  // const error = useAppSelector(selectErrorMessage);

  useEffect(() => {
    dispatch(getUsers(page, count));
  }, [dispatch, page]);

  const onHandlerShowMore = () => {
    const number = 1;
    dispatch(showNextUsers(page + number));
  };

  return (
    <div className="container">
      {initialized && <Preloader />}
      <h1 className="title">Working with GET request</h1>
      <div className={s.users__wrapper}>
        {users.map(user => (
          <User
            key={user.id}
            email={fixLengthText(user.email)}
            photo={user.photo}
            phone={user.phone}
            name={fixLengthText(user.name)}
            position={user.position}
          />
        ))}
      </div>
      <div className={s.users__wrapperBtn}>
        {totalPage !== page && (
          <button
            type="button"
            onClick={onHandlerShowMore}
            className={s.users__wrapperBtn_btn}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};
