import styles from './UserWallpaper.module.css';
import defaultImg from '../../img/background.jpg';

export const UserWallpaper = ({ currentInfo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.imgContainer}>
        <img
          src={
            currentInfo.data.attributes.coverImage
              ? currentInfo.data.attributes.coverImage.original
              : defaultImg
          }
          className={styles.img}
          alt="background"
        />
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.img}
            src={currentInfo.data.attributes.avatar.large}
            alt="avatar"
          />
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.name}>{currentInfo.data.attributes.name}</div>
          <button className={styles.btn}>
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};
