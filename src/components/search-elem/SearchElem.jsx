import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setState } from '../../slices/animeListSlice';
import styles from './SearchElem.module.css';

export const SearchElem = ({ inf }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={styles.searchElem}
      onClick={() => {
        dispatch(setState({ value: inf, name: 'select' }));
        localStorage.setItem('anime', JSON.stringify(inf));
        navigate(inf.attributes.slug);
      }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={inf.attributes.posterImage.small}
          alt="poster"
        />
      </div>
      <div className={styles.infContainer}>
        <p className={styles.name}>
          {inf.attributes.titles.en
            ? inf.attributes.titles.en
            : inf.attributes.canonicalTitle}
        </p>
        <p className={styles.status}>{inf.attributes.status}</p>
        <p className={styles.inf}>
          {inf.attributes.subtype} | {inf.attributes.ageRating}
        </p>
      </div>
    </div>
  );
};
