import { FormikProps } from 'formik';

import { FormikErrorType } from './types';

export const checkValidation = (
  formik: FormikProps<FormikErrorType>,
  values: FormikErrorType,
  setIsDisable: (disable: boolean) => void,
) => {
  const { errors: fieldErrors } = formik;
  const errors: FormikErrorType = {};

  if (!values.email) {
    errors.email = 'Required';
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
    const minNameLength = 2;
    const maxNameLength = 60;

    if (values.name.length < minNameLength) {
      errors.name = 'The name must be at least 2 characters.';
    }
    if (values.name.length > maxNameLength) {
      errors.name = 'The maximum string length must be no more than 60 characters';
    }
  }

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

  if (!values.photo) {
    errors.photo = 'Required';
  }

  if (!values.position_id) {
    errors.position_id = 'Required';
  }
  const emptyErrorsLength = 0;

  const isError =
    fieldErrors.email || fieldErrors.name || fieldErrors.photo || fieldErrors.phone;

  if (isError) {
    if (Object.keys(errors).length === emptyErrorsLength) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }
  return errors;
};
