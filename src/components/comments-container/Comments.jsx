import styles from './Comments.module.css';
import { useState, useEffect } from 'react';
import { Comment } from '../comment/Comment';

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/media-reactions?filter%5BanimeId%5D=${id}&page%5Blimit%5D=6&page%5Boffset%5D=0`
    )
      .then((response) => response.json())
      .then((result) => {
        setComments(result.data);
      });
  }, [id]);

  const fetchData = () => {
    fetch(
      `https://kitsu.io/api/edge/media-reactions?filter%5BanimeId%5D=${id}&page%5Blimit%5D=6&page%5Boffset%5D=${
        count + 6
      }`
    )
      .then((response) => response.json())
      .then((result) => {
        setComments([...comments, ...result.data]);
        setCount((count) => count + 6);
      });
  };

  return (
    <div className={styles.container}>
      {comments.length &&
        comments.map((el) => {
          return <Comment info={el} key={el.id} />;
        })}
      <button onClick={() => fetchData()} className={styles.btn}>
        More
      </button>
    </div>
  );
};