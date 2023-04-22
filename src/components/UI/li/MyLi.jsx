import styles from './MyLi.module.css';

export const MyLi = ({ img, name, children }) => {
  return (
    <li className={styles.li}>
      <span>{img && <img src={img} alt="icon" className={styles.icon} />}</span>
      <strong className={styles.name}>{name}</strong>
      {children}
    </li>
  );
};
