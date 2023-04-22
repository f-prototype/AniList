import { useEffect, useState } from 'react';
import { UserComment } from '../user-comment/UserComment';
import styles from './UserCommentsList.module.css';

export const UserCommentsList = ({ user }) => {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!user.data.id) return;
    (async () => {
      const response = await fetch(
        `https://kitsu.io/api/edge/media-reactions?filter%5BuserId%5D=${user.data.id}&page%5Blimit%5D=10&page%5Boffset%5D=${count}`
      );
      const result = await response.json();
      setComments((comments) => [...comments, ...result.data]);
    })();
  }, [user, count]);
  return (
    <div className={styles.container}>
      {comments &&
        comments.map((elem) => {
          return <UserComment info={elem} user={user} key={elem.id} />;
        })}
    </div>
  );
};
