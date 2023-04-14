import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './MultiRangeSlider.module.css';

const MultiRangeSlider = ({ min, max, onChange }) => {
  const value = useSelector((state) => state.animeList.age);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Range length
  useEffect(() => {
    if (value === '') {
      range.current.style.width = `100%`;
      return;
    }
    const valuePercent = getPercent(value);
    if (range.current) {
      range.current.style.width = `${valuePercent}%`;
    }
  }, [value, getPercent]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={value === '' ? max : value}
        onChange={(event) => {
          const value = event.target.value;
          onChange(value);
        }}
        className={`${styles.thumb}  ${styles.thumbRight}`}
      />

      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div ref={range} className={styles.slider__range} />
        <div className={styles.slider__rightValue}>
          {value === '' ? max : value}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
