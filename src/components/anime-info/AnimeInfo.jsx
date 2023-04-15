import { AttributeElem } from '../attribute-elem/AttributeElem';
import { useDispatch } from 'react-redux';
import { resetGenres } from '../../slices/animeListSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './AnimeInfo.module.css';

export const AnimeInfo = ({ info }) => {
  const [categories, setCategories] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${info.id}/genres`)
      .then((response) => response.json())
      .then((result) => {
        let genresFetch = [];
        for (let elem of result.data) {
          genresFetch.push(
            <Link
              to="/"
              onClick={() => dispatch(resetGenres(elem.attributes.slug))}
              className={styles.link}
            >
              {elem.attributes.name}
            </Link>
          );
        }
        setCategories(genresFetch);
      });
  }, [dispatch, info]);

  return (
    <div className={styles.mainInfo}>
      <div className={styles.imgContainer}>
        <img
          src={info.attributes.posterImage.original}
          alt="img"
          className={styles.img}
        />
      </div>
      <div className={styles.attributesContainer}>
        <AttributeElem name="Status" info={info.attributes.status} />
        <AttributeElem name="Episodes" info={info.attributes.episodeLength} />
        <AttributeElem name="Type" info={info.attributes.subtype} />
        <AttributeElem name="Genres" info={categories} />
        <AttributeElem name="Age Raiting" info={info.attributes.ageRating} />
        <AttributeElem
          name="Popularity Rang"
          info={info.attributes.popularityRank}
        />
      </div>
    </div>
  );
};
