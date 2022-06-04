import React from 'react';

import s from '../Form/Form.module.scss';

import { InputFilePropsType } from './types';

export const InputFile = (props: InputFilePropsType) => {
  const { onPhotoChange, setFormError, hasError } = props;

  return (
    <label className={`${s.label} ${hasError('photo') && s.form__input_error}`}>
      <input
        required
        className="choose"
        name="photo"
        type="file"
        onChange={onPhotoChange}
      />
      <span className={s.button}>Upload</span>
      <span className={s.labelTwo}>Upload your photo</span>
      {setFormError('photo')}
    </label>
  );
};
