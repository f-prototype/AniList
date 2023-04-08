import styles from './WrapElem.module.css';

export const WrapElem = ({ info, img }) => {
  return (
    <div className={styles.container}>
      <h1>{info}</h1>
      <div className={styles.imgContainer}>
        <img src={img} className={styles.img} alt="background" />
      </div>
    </div>
  );
};
