import React, { ChangeEvent, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { checkValidation } from '../../../common/checkValidation/checkValidation';
import { PathNavigation } from '../../../common/enums/Navigation';
import { useAppSelector } from '../../../common/hook/useAppSelectorHook';
import { ModalError } from '../../../common/modalError/ModalError';
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

import s from './Form.module.scss';

import preloader from 'assets/image/Preloader/Preloader.svg';

export const Form = () => {
  const dispatch = useTypedDispatch();

  const initialized = useAppSelector(selectInitialized);
  const error = useAppSelector(selectErrorValue);
  const positionDate = useAppSelector(selectPosition);
  const isRedirectValue = useAppSelector(selectIsRedirect);

  // redirect
  const navigate = useNavigate();

  // local state
  const [disable, setDisable] = useState<boolean>(true);

  // formik
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

  const isErrorChecking = (value: string) =>
    formik.touched[value] && formik.errors[value];

  const validationCheckHandler = (value: string) =>
    formik.touched[value] && formik.errors[value] ? (
      <div className={s.form__error}>{formik.errors[value]}</div>
    ) : null;

  // onChange input radio
  const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  // onChange input photo
  const onChangeHandlerPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const firstElement = 0;
    if (e.currentTarget.files && e.currentTarget.files.length) {
      formik.setFieldValue('photo', e.currentTarget.files[firstElement]);
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
      {error && <ModalError />}
      <h2 className="title">Working with POST request</h2>
      <form className={s.form__wrapper} onSubmit={formik.handleSubmit}>
        <div>
          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${
                isErrorChecking('name') && s.form__input_error
              } `}
              placeholder="Your name"
              {...formik.getFieldProps('name')}
            />
            {/* // validate name */}
            {validationCheckHandler('name')}
          </label>

          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${
                formik.touched.email && formik.errors.email && s.form__input_error
              } `}
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />
            {/* // validate email */}
            {validationCheckHandler('email')}
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
            {/* // validate phone */}
            <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span>
            {validationCheckHandler('phone')}
          </label>
        </div>

        <div className={s.form__select_wrap}>
          {/* // loader active */}
          {initialized && <img className={s.preloader} src={preloader} alt="preloader" />}
          <p className={s.form__select_text}>Select your position</p>

          {positionDate.map(e => (
            <label key={e.id} className={s.form__select_item}>
              <input
                defaultChecked={formik.values.position_id === e.id}
                onChange={onChangeHandlerInput}
                required
                type="radio"
                className={s.form__radio}
                value={e.id}
                name="position_id"
              />
              <span className={s.form__check_style} />
              {e.name}
              {validationCheckHandler('position_id')}
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
            onChange={onChangeHandlerPhoto}
          />
          <span className={s.button}>Upload</span>
          <span className={s.labelTwo}>Upload your photo</span>
          {validationCheckHandler('photo')}
        </label>
        <button className={s.form__btn} disabled={disable} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
