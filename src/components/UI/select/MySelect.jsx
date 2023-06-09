import { useRef } from 'react';
import { CheckBox } from '../checkbox/CheckBox';
import styles from './MySelect.module.css';

export const MySelect = ({ elems, def, select, name }) => {
  const ref = useRef(null);

  const onSelectClick = (event) => {
    event.stopPropagation();
    event.target.classList.toggle(styles.rotate);
    ref.current.classList.toggle(styles.block);
    document.addEventListener('click', handleClickOutside);
  };

  const onOptionClick = (event) => {
    event.stopPropagation();
  };
  const handleClickOutside = () => {
    ref.current && ref.current.classList.remove(styles.block);
    document.removeEventListener('click', handleClickOutside);
  };
  return (
    <div onClick={onSelectClick} className={styles.container}>
      <div className={styles.default}>{def}</div>
      <div className={styles.genresContainer} ref={ref}>
        {elems.map((el) => {
          return (
            <div
              className={styles.genre}
              onClick={onOptionClick}
              key={el.attributes.slug}
            >
              <label className={styles.label}>
                <CheckBox
                  inf={el.attributes.slug}
                  check={select.includes(el.attributes.slug)}
                  name={name}
                />
                <span>{el.attributes.title}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
