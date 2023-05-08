import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setState } from '../../slices/animeListSlice';
import styles from './Sort.module.css';

export const Sort = () => {
  const ref = useRef(null);
  const sort = useSelector((state) => state.animeList.sort);
  const dispatch = useDispatch();

  const onOptionClick = (event) => {
    let value = event.target.innerHTML;
    ref.current.innerHTML = value;
    if (value === 'Popularity') {
      dispatch(setState({ value: value.toLowerCase() + 'Rank', name: 'sort' }));
    } else {
      dispatch(
        setState({
          value: '-' + value.toLowerCase() + 'Rating',
          name: 'sort',
        })
      );
    }
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
          {sort === 'popularityRank' ? 'Popularity' : 'Average'}
        </div>
        <div className={styles.option} onClick={onOptionClick}>
          Popularity
        </div>
        <div className={styles.option} onClick={onOptionClick}>
          Average
        </div>
      </div>
    </div>
  );
};
