import React, { ChangeEvent, useEffect, useState } from 'react';

import { useFormik } from 'formik';

import { getPositions } from '../../../bll/reducers/form/form-reducer';
import { selectPositions } from '../../../bll/selectors/selectors';
import { useTypedDispatch } from '../../../bll/store';
import { checkValidation } from '../../../common/checkValidation/checkValidation';
import { useAppSelector } from '../../../common/hook/useAppSelectorHook';

import s from './Form.module.scss';

export const Form = () => {
  const dispatch = useTypedDispatch();
  const positions = useAppSelector(selectPositions);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    dispatch(getPositions());
  }, []);

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: 1,
      photo: '',
    },
    // validate: values => checkValidation(formik, values, setDisable),
    onSubmit: values => {
      // eslint-disable-next-line no-debugger
      console.log(values);
    },
  });
  const onHandlerRadio = (e: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };
  // onChange input photo
  const onChangeHandlerPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const firstElement = 0;
    if (e.currentTarget.files && e.currentTarget.files.length) {
      formik.setFieldValue('photo', e.currentTarget.files[firstElement]);
    }
  };

  // @ts-ignore
  // const validationCheckHandler = (value: string) =>
  //   formik.touched[value] && formik.errors[value] ? (
  //     <div className={s.form__error}>{formik.errors[value]}</div>
  //   ) : null;

  return (
    <div className="container">
      <h2 className="title">Working with POST request</h2>
      <div className={s.form__wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <label>
            <input
              className={s.form__wrapper_input}
              type="text"
              placeholder="Your name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <div className="error">{formik.errors.name}</div>
          </label>
          <label>
            <input
              className={s.form__wrapper_input}
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="error">{formik.errors.email}</div>
          </label>
          <label>
            <input
              className={s.form__wrapper_input}
              placeholder="Phone"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <div className="error">{formik.errors.phone}</div>
          </label>

          <div className={s.form__wrapper_checkBox}>
            <p className={s.form__input_title}>Select your position</p>
            {positions.map(el => (
              <label key={el.id} className={s.form__label_checkBox}>
                <input
                  required
                  name="position"
                  type="radio"
                  onChange={onHandlerRadio}
                  className={s.form__input_checkBox}
                  value={el.id}
                />
                {el.name}
              </label>
            ))}
          </div>
          <button type="submit">Sing up</button>
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
            {/* {validationCheckHandler('photo')} */}
            {formik.touched.photo && formik.errors.photo ? (
              <div className={s.form__error}>{formik.errors.photo}</div>
            ) : null}
          </label>
        </form>
      </div>
    </div>
  );
};
