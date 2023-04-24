import { useEffect, useState, useRef } from 'react';
import { UserComment } from '../user-comment/UserComment';
import styles from './UserCommentsList.module.css';

export const UserCommentsList = ({ user }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const btnRef = useRef(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!user.data.id) return;
    (async () => {
      const response = await fetch(
        `https://kitsu.io/api/edge/media-reactions?filter%5BuserId%5D=${user.data.id}&page%5Blimit%5D=10&page%5Boffset%5D=${count}`
      );
      const result = await response.json();
      if (result.data) setComments((comments) => [...comments, ...result.data]);
      else btnRef.current.disabled = true;
    })();
  }, [user, count]);

  return (
    <div className={styles.container} ref={ref}>
      {comments &&
        comments.map((elem) => {
          return <UserComment info={elem} user={user} key={elem.id} />;
        })}
      <button
        className={styles.btn}
        onClick={() => setCount((count) => count + 10)}
        ref={btnRef}
      >
        More
      </button>
    </div>
  );
};
