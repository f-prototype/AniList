import search from '../../img/search.png';
import styles from './Form.module.css';

export const Form = () => {
  return (
    <form action="#" className={styles.form} autoComplete="off">
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        maxLength={18}
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        <img className={styles.search} alt="search" src={search} />
      </button>
    </form>
  );
};
