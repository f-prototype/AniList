import { MyResponsivePie } from '../MyResponsivePie/Diagram';
import { MyLi } from '../UI/li/MyLi';
import following from '../../img/svg/following.svg';
import likes from '../../img/svg/circle-heart.svg';
import styles from './Statistics.module.css';

export const Statistics = ({ user }) => {
  return (
    <div className={styles.stats}>
      <h6 className={styles.h}>Statistics</h6>
      <MyResponsivePie user={user} />
      <ul>
        <MyLi img={following} name="Following:">
          {user.data.attributes.followingCount}
        </MyLi>
        <MyLi img={following} name="Followers:">
          {user.data.attributes.followersCount}
        </MyLi>
        <MyLi img={likes} name="Likes given:">
          {user.data.attributes.likesGivenCount}
        </MyLi>
        <MyLi img={likes} name="Likes receiven:">
          {user.data.attributes.likesReceivedCount}
        </MyLi>
      </ul>
    </div>
  );
};
