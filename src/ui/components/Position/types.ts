import { ChangeEvent } from 'react';

import { PositionType } from '../../../store/reducers/form/types';

export type PositionPropsType = {
  positions: PositionType[];
  onPositionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-undef
  setFormError: (value: string) => JSX.Element | null;
  positionId: string;
};
