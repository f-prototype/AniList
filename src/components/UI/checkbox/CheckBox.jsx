import { useDispatch } from 'react-redux';
import { pushInState, removeFromState } from '../../../slices/animeListSlice';
import styles from './CheckBox.module.css';

export const CheckBox = ({ inf, check, name }) => {
  const dispatch = useDispatch();
  const change = (event) => {
    if (event.target.checked) {
      dispatch(pushInState({ value: inf, name: name }));
    } else {
      dispatch(removeFromState({ value: inf, name: name }));
    }
  };
  return (
    <input
      type="checkbox"
      className={styles.check}
      onChange={change}
      checked={check}
    />
  );
};
