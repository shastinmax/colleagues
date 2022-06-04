import { FormikProps } from 'formik';

import { FormikErrorType } from './types';

export const checkValidation = (
  formik: FormikProps<FormikErrorType>,
  values: FormikErrorType,
  setDisable: (disable: boolean) => void,
) => {
  const errors: FormikErrorType = {};
  // email
  if (!values.email) {
    errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    /* eslint-disable no-useless-escape */
  }
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
      <string>values.email,
    )
  ) {
    errors.email = 'The email must be a valid email address';
  }
  if (!values.name) {
    errors.name = 'Required';
  } else {
    const minValue = 2;
    const maxValue = 60;
    if (values.name.length < minValue) {
      errors.name = 'The name must be at least 2 characters.';
    }
    if (values.name.length > maxValue) {
      errors.name = 'The maximum string length must be no more than 60 characters';
    }
  }

  // phone
  if (!values.phone) {
    errors.phone = 'Required';
  } else {
    const minValue = 13;
    if (values.phone.length < minValue) {
      errors.phone = 'The name must be at least 12 characters.';
    } else if (!/^\+[0-9]/i.test(values.phone)) {
      errors.phone = 'good';
    }
  }

  // photo
  if (!values.photo) {
    errors.photo = 'Required';
  }

  // position_id
  if (!values.position_id) {
    errors.position_id = 'Required';
  }
  // disable button
  if (
    formik.errors.email ||
    formik.errors.name ||
    formik.errors.photo ||
    formik.errors.phone
  ) {
    const number = 0;
    if (Object.keys(errors).length === number) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }
  return errors;
};
