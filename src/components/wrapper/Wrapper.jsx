import { useRef, useEffect, useState, useCallback } from 'react';
import { WrapElem } from '../wrap-elem/WrapElem';
import { Spinner } from '../spiner/Spinner';
import btnLeft from '../../img/left.svg';
import btnRight from '../../img/right.svg';
import styles from './Wrapper.module.css';

export const Wrapper = () => {
  const intervalRef = useRef();
  const countRef = useRef(0);
  const wrapInner = useRef(null);
  const [aniList, setAniList] = useState('');

  const move = useCallback(
    (route) => {
      if (route === 'r') {
        countRef.current === aniList.data.length - 1
          ? (countRef.current = 0)
          : countRef.current++;
      } else {
        countRef.current === 0
          ? (countRef.current = aniList.data.length - 1)
          : countRef.current--;
      }
      translate(countRef.current);
    },
    [aniList]
  );

  const translate = (count) => {
    wrapInner.current.style.transform = `translateX(${-100 * count}%)`;
  };

  const onButtonClick = (event) => {
    clearInterval(intervalRef.current);
    event.target.parentElement.value === 'r' ? move('r') : move('l');
  };

  useEffect(() => {
    (async function fetching() {
      try {
        const response = await fetch(
          'https://kitsu.io/api/edge/trending/anime'
        );
        if (response.status !== 200) throw new Error('Invalid Request');
        const result = await response.json();
        setAniList(result);
      } catch (err) {
        console.log(err);
        setTimeout(fetching, 4000);
      }
    })();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (aniList.data) intervalRef.current = setInterval(() => move('r'), 4000);
  }, [aniList, move]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapInner} ref={wrapInner}>
        {aniList.data ? (
          aniList.data.map((elem, index) => {
            return <WrapElem data={elem} rang={index + 1} key={elem.id} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
      <div
        className={styles.btnContainer}
        onClick={(event) => onButtonClick(event)}
      >
        <button value="r" className={styles.btn}>
          <img src={btnRight} alt="right" className={styles.btnImage} />
        </button>
        <button value="l" className={styles.btn}>
          <img src={btnLeft} alt="left" className={styles.btnImage} />
        </button>
      </div>
    </div>
  );
};
