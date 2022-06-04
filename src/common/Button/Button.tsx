import React from 'react';

import s from '../../ui/components/Form/Form.module.scss';

import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType) => {
  const { type, text, isDisable } = props;

  return (
    <button className={s.form__btn} disabled={isDisable} type={type}>
      {text}
    </button>
  );
};
