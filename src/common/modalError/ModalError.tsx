import { useAppSelector } from '../../hooks/useAppSelectorHook';
import { selectErrorValue } from '../../store/selectors/selectors';

import s from './modalError.module.scss';

export const ModalError = () => {
  const errorMessage = useAppSelector(selectErrorValue);

  return (
    <div className={s.wrapper}>
      <div className={s.block}>{errorMessage}</div>
    </div>
  );
};
