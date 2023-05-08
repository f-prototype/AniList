import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './AnimePage.module.css';
import { AnimeInfo } from '../anime-info/AnimeInfo';
import { Description } from '../DescriptionContainer/Description';
import { Video } from '../VideoContainer/Video';
import { Comments } from '../comments-container/Comments';

export const AnimePage = () => {
  const info = useSelector((state) => state.animeList.select);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{info.attributes.canonicalTitle}</h1>
      <AnimeInfo info={info} />
      <Description info={info} />
      <Video id={info.id} />
      <Comments id={info.id} />
    </div>
  );
};
