import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './UserComment.module.css';

export const UserComment = ({ info, user }) => {
  const currentInfo = useRef(info);
  const currentUser = useRef(user);
  const [anime, setAnime] = useState(null);
  const [manga, setManga] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        currentInfo.current.relationships.anime.links.related
      );
      const result = await response.json();
      setAnime(result);
      const responseManga = await fetch(
        currentInfo.current.relationships.manga.links.related
      );
      const resultManga = await responseManga.json();
      setManga(resultManga);
    })();
  }, []);

  const getCurrentData = () => {
    if (anime.data) {
      return (
        <>
          <img
            className={styles.animeImg}
            src={anime.data.attributes.posterImage.tiny}
          />
          <div className={styles.mainInfo}>
            <div className={styles.animeName}>
              {anime.data.attributes.canonicalTitle}
            </div>
            <div className={styles.description}>
              {anime.data.attributes.description}
            </div>
          </div>
        </>
      );
    } else if (manga) {
      console.log(manga.data);
      return (
        <>
          <img
            className={styles.animeImg}
            src={manga.data.attributes.posterImage.tiny}
          />
          <div className={styles.mainInfo}>
            <div className={styles.animeName}>
              {manga.data.attributes.canonicalTitle}
            </div>
            <div className={styles.description}>
              {manga.data.attributes.description}
            </div>
          </div>
        </>
      );
    } else {
      return <span>Not Found</span>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img
          className={styles.img}
          src={currentUser.current.data.attributes.avatar.original}
        />
        <div className={styles.name}>
          <span>{currentUser.current.data.attributes.name}</span>
          <p>
            {currentInfo.current.attributes.createdAt
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('.')}
          </p>
        </div>
      </div>
      <div>
        <span>{currentInfo.current.attributes.reaction}</span>
      </div>
      <div className={styles.animeInf}>
        {(anime !== null || manga !== null) && getCurrentData()}
      </div>
    </div>
  );
};
