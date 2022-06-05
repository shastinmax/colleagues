import React from 'react';

import s from './User.module.scss';

type UserPropsType = {
  key: string;
  email: string;
  photo: string;
  phone: string;
  name: string;
  position: string;
};

export const User = (props: UserPropsType) => {
  const { key, email, photo, phone, name, position } = props;

  return (
    <div key={key} className={s.user}>
      <img className={s.user__avatar} src={photo} alt="avatar" />

      <p className={s.user__name}>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};
