import { Filters } from '../filters/Filters';
import { Wrapper } from '../wrapper/Wrapper';
import styles from './MainPage.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Sort } from '../sort/Sort';

export const MainPage = () => {
  const genres = useSelector((state) => state.animeList.genres);
  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[categories]=${genres.join(
        ','
      )}&sort=-averageRating`
    )
      .then((response) => response.json())
      .then((result) => console.log(result));
  }, [genres]);

  return (
    <div className={styles.container}>
      <Wrapper />
      <div className={styles.options}>
        <Filters />
        <Sort />
      </div>
    </div>
  );
};
