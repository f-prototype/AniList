import { Wrapper } from '../wrapper/Wrapper';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <Wrapper arr={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
};
