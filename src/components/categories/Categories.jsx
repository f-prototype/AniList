import { Filters } from '../filters/Filters';
import { Sort } from '../sort/Sort';
import styles from './Categories.module.css';
export const Categories = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <Sort />
    </div>
  );
};
