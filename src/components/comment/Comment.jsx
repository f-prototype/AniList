import { useState } from 'react';
import { useEffect } from 'react';
import like from '../../img/like.svg';
import styles from './Comment.module.css';
import anonim from '../../img/user.svg';

export const Comment = ({ info }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(info.relationships.user.links.related)
      .then((response) => response.json())
      .then((result) => setUser(result));
  }, [info.relationships.user.links.related]);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {user && (
            <img
              src={
                user.data.attributes.avatar
                  ? user.data.attributes.avatar.small
                  : anonim
              }
              alt="11"
            />
          )}
        </div>
        <div className={styles.info}>
          <div>
            <p className={styles.name}>{user && user.data.attributes.name}</p>
            <p className={styles.data}>
              {info.attributes.createdAt.replace(/T/, ' ').slice(0, -5)}
            </p>
          </div>
          <div className={styles.likes}>
            <img src={like} alt="like" />
            {info.attributes.upVotesCount}
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{info.attributes.reaction}</p>
      </div>
    </div>
  );
};
