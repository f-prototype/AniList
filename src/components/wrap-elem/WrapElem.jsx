import { WrapElemInfo } from '../wrap-elem-info/WrapElemInfo';
import styles from './WrapElem.module.css';

export const WrapElem = ({ data, rang }) => {
  return (
    <div className={styles.container}>
      <WrapElemInfo data={data} raiting={rang} />
      <div className={styles.imgContainer}>
        <img
          src={data.attributes.coverImage.original}
          className={styles.img}
          alt="background"
        />
      </div>
    </div>
  );
};
