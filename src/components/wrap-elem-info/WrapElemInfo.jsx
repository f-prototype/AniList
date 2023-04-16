import styles from './WrapElemInfo.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { setSelect } from '../../slices/animeListSlice';
import child from '../../img/child.svg';
import timer from '../../img/time.svg';
import play from '../../img/play.svg';
import rating from '../../img/rating.svg';

export const WrapElemInfo = ({ data, raiting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <span className={styles.raiting}>#{raiting} Tranding</span>
      <h2 className={styles.name}>{data.attributes.canonicalTitle}</h2>
      <div className={styles.info}>
        <div className={styles.infoElem}>
          <img src={play} alt="img" className={styles.icon} />
          <span>{data.attributes.subtype}</span>
        </div>
        <div className={styles.infoElem}>
          <img src={timer} alt="img" className={styles.icon} />
          <span>
            {data.attributes.episodeLength ? data.attributes.episodeLength : 24}
            m
          </span>
        </div>
        <div className={styles.infoElem}>
          <img src={child} alt="img" className={styles.icon} />
          <span>
            {data.attributes.ageRating ? data.attributes.ageRating : 'PG'}
          </span>
        </div>
        <div className={styles.infoElem}>
          <img src={rating} alt="img" className={styles.icon} />
          <span>
            {data.attributes.averageRating
              ? data.attributes.averageRating
              : '-'}
          </span>
        </div>
      </div>
      <p className={styles.description}>{data.attributes.description}</p>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch(setSelect(data));
          navigate(data.attributes.slug);
        }}
      >
        Watch Now
      </button>
    </div>
  );
};
