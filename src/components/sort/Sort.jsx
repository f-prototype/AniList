import { setSort } from '../../slices/animeListSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useRef } from 'react';
import styles from './Sort.module.css';

export const Sort = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const onOptionClick = (event) => {
    let value = event.target.innerHTML;
    ref.current.innerHTML = value;
    dispatch(setSort(value.toLowerCase() + 'Rank'));
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>Sort by:</span>
      <div className={styles.containerOptions}>
        <div
          className={styles.default}
          onClick={(event) =>
            event.target.parentElement.classList.toggle(styles.open)
          }
          ref={ref}
        >
          Popularity
        </div>
        <div className={styles.option} onClick={onOptionClick}>
          Popularity
        </div>
        <div className={styles.option} onClick={onOptionClick}>
          Rating
        </div>
      </div>
    </div>
  );
};
