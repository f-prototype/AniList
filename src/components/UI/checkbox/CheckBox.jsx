import styles from './CheckBox.module.css';
import { useDispatch } from 'react-redux';

export const CheckBox = ({ inf, callbaks }) => {
  const dispatch = useDispatch();
  const change = (event) => {
    if (event.target.checked) {
      dispatch(callbaks.addInf(inf));
    } else {
      dispatch(callbaks.removeInf(inf));
    }
  };
  return <input type="checkbox" className={styles.check} onChange={change} />;
};
