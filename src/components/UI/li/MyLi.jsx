import styles from './MyLi.module.css';

export const MyLi = ({ img, name, children }) => {
  return (
    <li className={styles.li}>
      <span></span>
      <strong className={styles.name}>{name}</strong>
      {children}
    </li>
  );
};
