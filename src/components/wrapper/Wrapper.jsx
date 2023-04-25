import { useRef, useEffect, useState, useCallback } from 'react';
import { WrapElem } from '../wrap-elem/WrapElem';
import { Spinner } from '../spiner/Spinner';
import btnLeft from '../../img/left.svg';
import btnRight from '../../img/right.svg';
import styles from './Wrapper.module.css';

export const Wrapper = () => {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);
  const wrapInner = useRef(null);
  const [aniList, setAniList] = useState('');

  useEffect(() => {
    wrapInner.current.style.transform = `translateX(${-100 * count}%)`;
  }, [count]);

  const move = useCallback(
    (route) => {
      if (route === 'r') {
        count === aniList.data.length - 1
          ? setCount(0)
          : setCount((count) => count + 1);
      } else {
        count === 0
          ? setCount(aniList.data.length - 1)
          : setCount((count) => count - 1);
      }
    },
    [aniList, count]
  );

  const onButtonClick = (event) => {
    setStop(true);
    event.target.parentElement.value === 'r' ? move('r') : move('l');
  };

  useEffect(() => {
    (async function fetching() {
      if (aniList.data) return;
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
  }, [aniList.data]);

  useEffect(() => {
    console.log('qwe');
    if (aniList.data) intervalRef.current = setInterval(() => move('r'), 4000);
    if (stop) clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [aniList, stop, move]);

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
      <div className={styles.dots}>
        {aniList.data &&
          aniList.data.map((elem, index) => {
            return (
              <div
                className={
                  count !== index
                    ? styles.dot
                    : `${styles.dot} ${styles.selected}`
                }
                onClick={(event) => {
                  setCount(+event.target.id);
                  setStop(true);
                }}
                id={index}
                key={elem.attributes.slug}
              ></div>
            );
          })}
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
