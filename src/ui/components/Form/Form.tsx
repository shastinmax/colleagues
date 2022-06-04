import React, { ChangeEvent, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { ModalError } from '../../../common/modalError/ModalError';
import { PathNavigation } from '../../../enums/Navigation';
import { useAppSelector } from '../../../hooks/useAppSelectorHook';
import { addUser } from '../../../store/middlewares/form/addUser';
import { getPositions } from '../../../store/middlewares/form/getPositions';
import { getToken } from '../../../store/middlewares/form/getToken';
import {
  selectErrorValue,
  selectInitialized,
  selectIsRedirect,
  selectPosition,
} from '../../../store/selectors/selectors';
import { useTypedDispatch } from '../../../store/store';
import { checkValidation } from '../../../utils/checkValidation/checkValidation';

import s from './Form.module.scss';

import preloader from 'assets/image/Preloader/Preloader.svg';

const FIRST_ELEMENT_INDEX = 0;

export const Form = () => {
  const dispatch = useTypedDispatch();

  const initialized = useAppSelector(selectInitialized);
  const errorMessage = useAppSelector(selectErrorValue);
  const positions = useAppSelector(selectPosition);
  const isRedirectValue = useAppSelector(selectIsRedirect);

  const navigate = useNavigate();

  const [disable, setDisable] = useState<boolean>(true);

  const formik: any = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: '',
    },
    validate: values => checkValidation(formik, values, setDisable),
    onSubmit: data => {
      dispatch(addUser({ ...data, position_id: Number(data.position_id) }));

      setDisable(false);

      formik.resetForm();
    },
  });

  const hasError = (value: string) => formik.touched[value] && formik.errors[value];

  const setFormError = (value: string) =>
    formik.touched[value] && formik.errors[value] ? (
      <div className={s.form__error}>{formik.errors[value]}</div>
    ) : null;

  const onPositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      formik.setFieldValue('photo', e.currentTarget.files[FIRST_ELEMENT_INDEX]);
    }
  };

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getToken());
  }, []);

  if (isRedirectValue) {
    navigate(`${PathNavigation.USERS}`);
  }

  return (
    <div className={`container ${s.form__box}`}>
      {errorMessage && <ModalError />}

      <h2 className="title">Working with POST request</h2>
      <form className={s.form__wrapper} onSubmit={formik.handleSubmit}>
        <div>
          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${hasError('name') && s.form__input_error} `}
              placeholder="Your name"
              {...formik.getFieldProps('name')}
            />
            {setFormError('name')}
          </label>

          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${
                formik.touched.email && formik.errors.email && s.form__input_error
              } `}
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />
            {setFormError('email')}
          </label>

          <label className={`${s.form__label} ${s.form__labelStyle_error}`}>
            <input
              className={`${s.form__input} ${
                formik.touched.phone && formik.errors.phone && s.form__input_error
              } `}
              type="text"
              placeholder="Phone"
              {...formik.getFieldProps('phone')}
            />
            <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span>
            {setFormError('phone')}
          </label>
        </div>

        <div className={s.form__select_wrap}>
          {initialized && <img className={s.preloader} src={preloader} alt="preloader" />}
          <p className={s.form__select_text}>Select your position</p>

          {positions.map(({ id, name }) => (
            <label key={id} className={s.form__select_item}>
              <input
                defaultChecked={formik.values.position_id === id}
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
        </div>

        <label
          className={`${s.label} ${
            formik.touched.photo && formik.errors.photo && s.form__input_error
          } `}
        >
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
        <button className={s.form__btn} disabled={disable} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
