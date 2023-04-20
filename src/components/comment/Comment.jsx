import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../slices/animeListSlice';
import like from '../../img/like.svg';
import styles from './Comment.module.css';
import anonim from '../../img/user.svg';

export const Comment = ({ info }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
              onClick={() => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(selectUser(user));
                navigate(`/users/${user.data.attributes.slug}`);
              }}
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
