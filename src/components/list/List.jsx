import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../../slices/animeListSlice';
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
  const list = useSelector((state) => state.animeList.list);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[categories]=${genres.join()}&filter[season]=${season.join()}${
        age && `&filter[seasonYear]=${age}`
      }&sort=${sort}&page%5Blimit%5D=20&page%5Boffset%5D=0'`
    )
      .then((response) => response.json())
      .then((result) => dispatch(setList(result.data)));
  }, [genres, season, age, sort, dispatch]);

  const onLoadMore = (count) => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[categories]=${genres.join()}&filter[season]=${season.join()}${
        age && `&filter[seasonYear]=${age}`
      }&sort=${sort}&page%5Blimit%5D=20&page%5Boffset%5D=${count + 20}'`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(setList(list.concat(result.data)));
        setCount((count) => count + 20);
      });
  };

  return (
    <>
      <div className={styles.container}>
        {list.length ? (
          list.map((elem) => {
            return <ListElem info={elem} key={elem.id} />;
          })
        ) : (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
        {/* <Spinner /> */}
      </div>
      <button onClick={() => onLoadMore(count)} className={styles.btn}>
        More
      </button>
    </>
  );
};
