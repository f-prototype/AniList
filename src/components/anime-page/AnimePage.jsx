import styles from './AnimePage.module.css';
import { useSelector } from 'react-redux';
import { AnimeInfo } from '../anime-info/AnimeInfo';
import { Description } from '../DescriptionContainer/Description';
import { Video } from '../VideoContainer/Video';

export const AnimePage = () => {
  const info = useSelector((state) => state.animeList.select);
  const Info = localStorage.getItem('anime');
  const localInfo = JSON.parse(Info);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        {Object.keys(info).length
          ? info.attributes.canonicalTitle
          : localInfo.attributes.canonicalTitle}
      </h1>
      <AnimeInfo info={Object.keys(info).length ? info : localInfo} />
      <Description info={Object.keys(info).length ? info : localInfo} />
      <Video id={Object.keys(info).length ? info.id : localInfo.id} />
    </div>
  );
};
