import styles from './WrapElemInfo.module.css';

export const WrapElemInfo = ({ data, raiting }) => {
  return (
    <div className={styles.container}>
      <span className={styles.raiting}>#{raiting} Tranding</span>
      <h2 className={styles.name}>{data.attributes.canonicalTitle}</h2>
      <p className={styles.description}>{data.attributes.description}</p>
      <button className={styles.btn}>Watch Now</button>
    </div>
  );
};
