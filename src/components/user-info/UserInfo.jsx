import About from '../about/About';
import { Statistics } from '../statistics/Statistics';
import { UserFavorites } from '../user-favorites/UserFavorites';
import styles from './UserInfo.module.css';

export const UserInfo = ({ currentInfo }) => {
  return (
    <div className={styles.info}>
      <About currentInfo={currentInfo} />
      <Statistics user={currentInfo.current} />
      <UserFavorites
        link={currentInfo.current.data.relationships.favorites.links.related}
      />
    </div>
  );
};
