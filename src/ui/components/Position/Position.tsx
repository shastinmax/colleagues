import React from 'react';

import s from '../Form/Form.module.scss';

import { PositionPropsType } from './types';

export const Position = (props: PositionPropsType) => {
  const { positions, onPositionChange, setFormError, positionId } = props;

  return (
    <>
      {positions.map(({ id, name }) => (
        <label key={id} className={s.form__select_item}>
          <input
            defaultChecked={positionId === id}
            onChange={onPositionChange}
            required
            type="radio"
            className={s.form__radio}
            value={id}
            name="position_id"
          />
          <span className={s.form__check_style} />
          {name}
          {setFormError('position_id')}
        </label>
      ))}
    </>
  );
};
