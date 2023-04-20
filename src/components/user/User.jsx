import styles from './User.module.css';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import About from '../about/About';

export const User = () => {
  const info = useSelector((state) => state.animeList.user);
  const localInfo = useRef(JSON.parse(localStorage.getItem('user')));
  const currentInfo = useRef(
    Object.keys(info).length ? info : localInfo.current
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img
            src={currentInfo.current.data.attributes.coverImage.large}
            className={styles.img}
            alt="background"
          />
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.img}
              src={currentInfo.current.data.attributes.avatar.large}
              alt="avatar"
            />
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.name}>
              {currentInfo.current.data.attributes.name}
            </div>
            <button className={styles.btn}>
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <About currentInfo={currentInfo} />
      </div>
    </div>
  );
};
