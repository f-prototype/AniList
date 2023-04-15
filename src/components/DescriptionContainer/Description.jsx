import style from './Description.module.css';

export const Description = ({ info }) => {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.description}>
        <h2>
          <span className={style.red}>Description </span>for{' '}
          {info.attributes.canonicalTitle}
        </h2>
        <p className={style.descriptionInner}>{info.attributes.description}</p>
      </div>
    </div>
  );
};
