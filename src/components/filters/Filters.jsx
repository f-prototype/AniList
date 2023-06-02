import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setState, resetState } from '../../slices/animeListSlice';
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider';
import { MySelect } from '../UI/select/MySelect';
import { seasons } from '../../utils/seasons';
import styles from './Filters.module.css';
import clear from '../../img/svg/clear.svg';

export const Filters = () => {
  const dispatch = useDispatch();
  const selectGenres = useSelector((state) => state.animeList.genres);
  const selectSeasons = useSelector((state) => state.animeList.season);
  const [genres, addGenres] = useState([]);
  const onChange = (value) => dispatch(setState({ name: 'age', value }));
  useMemo(() => {
    (async () => {
      const response = await fetch(
        'https://kitsu.io/api/edge/categories?page%5Blimit%5D=218&page%5Boffset%5D=0'
      );
      const result = await response.json();
      const sorted = result.data.sort((a, b) => {
        if (a.attributes.slug > b.attributes.slug) {
          return 1;
        } else {
          return -1;
        }
      });
      addGenres(sorted);
    })();
  }, []);

  return (
    <form className={styles.container}>
      <MySelect
        elems={genres}
        def="Genres"
        name="genres"
        select={selectGenres}
      />
      <MySelect
        elems={seasons}
        def="Seasons"
        name="season"
        select={selectSeasons}
      />
      <MultiRangeSlider
        min={1998}
        max={2023}
        onChange={(value) => onChange(value)}
      />
      <span
        onClick={() => {
          dispatch(resetState());
        }}
        className={styles.reset}
      >
        <img className={styles.btnBack} src={clear} alt="clear" />
      </span>
    </form>
  );
};
