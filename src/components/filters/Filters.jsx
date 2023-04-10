import { MySelect } from '../UI/select/MySelect';
import { useState, useMemo } from 'react';
import styles from './Filters.module.css';
import { setGenres, removeGenre } from '../../slices/animeListSlice';
import { setSeason, removeSeason } from '../../slices/animeListSlice';

export const Filters = () => {
  const [genres, addGenres] = useState([]);
  const [seasons, addSeasons] = useState([
    { attributes: { slug: 'winter', title: 'winter' } },
    { attributes: { slug: 'spring', title: 'spring' } },
    { attributes: { slug: 'summer', title: 'summer' } },
    { attributes: { slug: 'fall', title: 'fall' } },
  ]);
  useMemo(() => {
    fetch(
      'https://kitsu.io/api/edge/categories?page%5Blimit%5D=218&page%5Boffset%5D=0'
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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
  return (
    <div className={styles.container}>
      <MySelect
        elems={genres}
        def="Genres"
        callbaks={{ addInf: setGenres, removeInf: removeGenre }}
      />
      <MySelect
        elems={seasons}
        def="Seasons"
        callbaks={{ addInf: setSeason, removeInf: removeSeason }}
      />
    </div>
  );
};
