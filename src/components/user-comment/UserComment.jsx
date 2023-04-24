import { memo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './UserComment.module.css';

export const UserComment = memo(({ info, user }) => {
  const currentInfo = useRef(info);
  const currentUser = useRef(user);
  const [targetInfo, setTargetInfo] = useState({
    anime: { data: null },
    manga: { data: null },
  });
  useEffect(() => {
    (async () => {
      const response = await fetch(
        currentInfo.current.relationships.anime.links.related
      );
      const result = await response.json();
      if (result.data) {
        setTargetInfo((targetInfo) => ({ ...targetInfo, anime: result }));
        return;
      }
      const responseManga = await fetch(
        currentInfo.current.relationships.manga.links.related
      );
      const resultManga = await responseManga.json();
      setTargetInfo((targetInfo) => ({ ...targetInfo, manga: resultManga }));
    })();
  }, []);

  const getCurrentInfo = () => {
    let result;
    if (targetInfo.anime.data) {
      result = targetInfo.anime.data;
    } else {
      result = targetInfo.manga.data;
    }
    return result;
  };

  const getCurrentData = (data) =>
    data.slice(0, 10).split('-').reverse().join('.');

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img
          className={styles.img}
          src={currentUser.current.data.attributes.avatar.original}
          alt="img"
        />
        <div className={styles.name}>
          <span>{currentUser.current.data.attributes.name}</span>
          <p>{getCurrentData(currentInfo.current.attributes.createdAt)}</p>
        </div>
      </div>
      <div>
        <span>{currentInfo.current.attributes.reaction}</span>
      </div>
      <div className={styles.animeInf}>
        {(targetInfo.anime.data || targetInfo.manga.data) && (
          <>
            <img
              className={styles.animeImg}
              src={getCurrentInfo().attributes.posterImage.tiny}
              alt="img"
            />
            <div className={styles.mainInfo}>
              <div className={styles.animeName}>
                {getCurrentInfo().attributes.canonicalTitle}
              </div>
              <div className={styles.description}>
                {getCurrentInfo().attributes.description}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
