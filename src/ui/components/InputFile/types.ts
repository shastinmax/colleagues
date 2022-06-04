import { ChangeEvent } from 'react';

export type InputFilePropsType = {
  onPhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-undef
  setFormError: (value: string) => JSX.Element | null;
  hasError: (value: string) => string;
};
