import styles from './Myfooter.module.css';

export const Myfooter = () => {
  return (
    <div className={styles.container}>
      <p>Created by Alex Sazonov</p>
      <p>©2022&ndash;{new Date().getFullYear()}.</p>
    </div>
  );
};
