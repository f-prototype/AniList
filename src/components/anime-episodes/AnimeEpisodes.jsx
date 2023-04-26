import { useEffect, useRef, useState } from 'react';
import styles from './Episode.module.css';

export const AnimeEpisodes = ({ id }) => {
  const [episodes, setEpisodes] = useState(null);
  const defRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime/${id}/episodes?page%5Blimit%5D=20&page%5Boffset%5D=0`
    )
      .then((response) => response.json())
      .then((result) => {
        setEpisodes(result);
      });
  }, [id]);
  return (
    <div
      className={styles.container}
      onClick={() => {
        containerRef.current.classList.toggle(styles.open);
        defRef.current.classList.toggle(styles.rotate);
      }}
    >
      <div className={styles.default} ref={defRef}>
        1 episode
      </div>
      <div className={styles.episodContainer} ref={containerRef}>
        {episodes &&
          episodes.data.map((el, index) => {
            return (
              <div
                className={styles.episod}
                key={el.id}
                onClick={(event) =>
                  (defRef.current.innerHTML = event.target.innerHTML)
                }
              >
                {index + 1} episode
              </div>
            );
          })}
      </div>
    </div>
  );
};
