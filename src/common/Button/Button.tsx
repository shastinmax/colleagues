import React from 'react';

import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType) => {
  const { type, text, isDisable, callback } = props;

  return (
    <button onClick={callback} className="btn" disabled={isDisable} type={type}>
      {text}
    </button>
  );
};
