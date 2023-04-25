import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import styles from './List.module.css';
import ListElem from '../list-elem/ListElem';
import { Spinner } from '../spiner/Spinner';

export const List = () => {
  const [count, setCount] = useState(0);
  const genres = useSelector((state) => state.animeList.genres);
  const season = useSelector((state) => state.animeList.season);
  const age = useSelector((state) => state.animeList.age);
  const sort = useSelector((state) => state.animeList.sort);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[categories]=${genres.join()}&filter[season]=${season.join()}${
          age && `&filter[seasonYear]=${age}`
        }&sort=${sort}&page%5Blimit%5D=20&page%5Boffset%5D=0'`
      );
      const result = await response.json();
      setList(result.data);
    })();
  }, [genres, season, age, sort]);

  const fetchMore = useCallback(
    async (count) => {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[categories]=${genres.join()}&filter[season]=${season.join()}${
          age && `&filter[seasonYear]=${age}`
        }&sort=${sort}&page%5Blimit%5D=20&page%5Boffset%5D=${count}'`
      );
      const result = await response.json();
      setList((list) => list.concat(result.data));
    },
    [genres, season, age, sort]
  );

  useEffect(() => {
    if (count !== 0) fetchMore(count);
  }, [count, fetchMore]);

  return (
    <>
      <div className={styles.container}>
        {[...list].length ? (
          list.map((elem) => {
            return <ListElem info={elem} key={elem.id} />;
          })
        ) : (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
      </div>
      <button
        onClick={() => setCount((count) => count + 20)}
        className={styles.btn}
      >
        More
      </button>
    </>
  );
};
