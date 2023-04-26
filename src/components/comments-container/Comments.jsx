import { useState, useEffect } from 'react';
import { Comment } from '../comment/Comment';
import styles from './Comments.module.css';

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://kitsu.io/api/edge/media-reactions?filter%5BanimeId%5D=${id}&page%5Blimit%5D=6&page%5Boffset%5D=${count}`
      );
      const result = await response.json();
      setComments((comments) => [...comments, ...result.data]);
    })();
  }, [id, count]);

  return (
    <div className={styles.container}>
      {comments.length &&
        comments.map((el) => {
          return <Comment info={el} key={el.id} />;
        })}
      <button
        onClick={() => setCount((count) => count + 6)}
        className={styles.btn}
      >
        More
      </button>
    </div>
  );
};
