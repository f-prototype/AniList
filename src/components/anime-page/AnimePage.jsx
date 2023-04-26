import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './AnimePage.module.css';
import { AnimeInfo } from '../anime-info/AnimeInfo';
import { Description } from '../DescriptionContainer/Description';
import { Video } from '../VideoContainer/Video';
import { Comments } from '../comments-container/Comments';

export const AnimePage = () => {
  const info = useSelector((state) => state.animeList.select);
  const localInfo = useRef(JSON.parse(localStorage.getItem('anime')));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        {Object.keys(info).length
          ? info.attributes.canonicalTitle
          : localInfo.current.attributes.canonicalTitle}
      </h1>
      <AnimeInfo info={Object.keys(info).length ? info : localInfo.current} />
      <Description info={Object.keys(info).length ? info : localInfo.current} />
      <Video id={Object.keys(info).length ? info.id : localInfo.current.id} />
      <Comments
        id={Object.keys(info).length ? info.id : localInfo.current.id}
      />
    </div>
  );
};
