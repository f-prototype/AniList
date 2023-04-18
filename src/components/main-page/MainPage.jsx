import { Wrapper } from '../wrapper/Wrapper';
import { Categories } from '../categories/Categories';
import { List } from '../list/List';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Wrapper />
      <Categories />
      <List />
    </div>
  );
};
