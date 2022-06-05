import React, { useEffect } from 'react';

import { Button } from '../../../common/Button/Button';
import { Preloader } from '../../../common/Preloader/Preloader';
import { useAppSelector } from '../../../hooks/useAppSelectorHook';
import { showNextUsers } from '../../../store/actionCreators/user/actionCreator';
import { getUsers } from '../../../store/middlewares/user/getUsers';
import { selectInitialized } from '../../../store/selectors/appSelector/appSelector';
import {
  selectCount,
  selectPage,
  selectTotalPages,
  selectUsers,
} from '../../../store/selectors/userSelector/userSelector';
import { useTypedDispatch } from '../../../store/store';
import { fixLengthText } from '../../../utils/fixLengthText';

import { User } from './User/User';
import s from './Users.module.scss';

const INCREMENT_VALUE = 1;

export const Users = () => {
  const dispatch = useTypedDispatch();

  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);
  const users = useAppSelector(selectUsers);
  const totalPage = useAppSelector(selectTotalPages);
  const initialized = useAppSelector(selectInitialized);

  useEffect(() => {
    dispatch(getUsers(page, count));
  }, [page]);

  const onNextPageClick = () => {
    const numberPage = page + INCREMENT_VALUE;
    dispatch(showNextUsers(numberPage));
  };

  return (
    <div className="container">
      {initialized && <Preloader />}

      <h1 className="title">Working with GET request</h1>

      <div className={s.users__wrapper}>
        {users.map(({ id, photo, phone, name, position, email }) => (
          <User
            key={id}
            email={fixLengthText(email)}
            photo={photo}
            phone={phone}
            name={fixLengthText(name)}
            position={position}
          />
        ))}
      </div>

      <div className={s.users__wrapperBtn}>
        {totalPage !== page && (
          <Button type="button" text="Show more" callback={onNextPageClick} />
        )}
      </div>
    </div>
  );
};
