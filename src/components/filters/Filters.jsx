import { MySelect } from '../UI/select/MySelect';
import { useState, useMemo } from 'react';
import styles from './Filters.module.css';
import { setGenres, removeGenre, reset } from '../../slices/animeListSlice';
import { setSeason, removeSeason } from '../../slices/animeListSlice';
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider';
import { setAge } from '../../slices/animeListSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filters = () => {
  const dispatch = useDispatch();
  const selectGenres = useSelector((state) => state.animeList.genres);
  const selectSeasons = useSelector((state) => state.animeList.season);
  const [genres, addGenres] = useState([]);
  const seasons = [
    { attributes: { slug: 'winter', title: 'winter' } },
    { attributes: { slug: 'spring', title: 'spring' } },
    { attributes: { slug: 'summer', title: 'summer' } },
    { attributes: { slug: 'fall', title: 'fall' } },
  ];
  useMemo(() => {
    fetch(
      'https://kitsu.io/api/edge/categories?page%5Blimit%5D=218&page%5Boffset%5D=0'
    )
      .then((response) => response.json())
      .then((result) => {
        let sorted = result.data.sort((a, b) => {
          if (a.attributes.slug > b.attributes.slug) {
            return 1;
          } else {
            return -1;
          }
        });
        addGenres(sorted);
      });
  }, []);
  const onChange = (value) => dispatch(setAge(value));

  return (
    <form className={styles.container}>
      <MySelect
        elems={genres}
        def="Genres"
        callbaks={{ addInf: setGenres, removeInf: removeGenre }}
        select={selectGenres}
      />
      <MySelect
        elems={seasons}
        def="Seasons"
        callbaks={{ addInf: setSeason, removeInf: removeSeason }}
        select={selectSeasons}
      />
      <MultiRangeSlider
        min={1998}
        max={2023}
        onChange={(value) => onChange(value)}
      />
      <span
        onClick={() => {
          dispatch(reset());
        }}
        className={styles.reset}
      >
        Clear Filters
      </span>
    </form>
  );
};
