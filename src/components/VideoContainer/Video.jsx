import { AnimeEpisodes } from '../anime-episodes/AnimeEpisodes';
import video from '../../video/Rick Astley - Never Gonna Give You Up.mp4';
import style from './Video.module.css';

export const Video = ({ id }) => {
  return (
    <div className={style.videoContainer}>
      <video controls className={style.video} preload="true">
        <source src={video} type="video/mp4" />
      </video>
      <AnimeEpisodes id={id} />
    </div>
  );
};
