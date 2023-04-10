import styles from './Wrapper.module.css';
import { WrapElem } from '../wrap-elem/WrapElem';
import btnLeft from '../../img/left.svg';
import btnRight from '../../img/right.svg';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export const Wrapper = ({ arr }) => {
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);
  const [aniList, setAniList] = useState('');
  const wrapInner = useRef(null);

  useEffect(() => {
    fetch('https://kitsu.io/api/edge/trending/anime')
      .then((response) => response.json())
      .then((result) => {
        setAniList(result);
      });
  }, []);

  const sliderInterval = useCallback(() => {
    counter === aniList.data.length - 1
      ? setCounter(0)
      : setCounter((counter) => counter + 1);
  }, [aniList, counter]);

  useEffect(() => {
    wrapInner.current.style.transform = `translateX(${-100 * counter}%)`;
  }, [counter]);

  useEffect(() => {
    if (stop) {
      return;
    }
    const timeoutFunction = setInterval(sliderInterval, 4000);
    return () => clearInterval(timeoutFunction);
  }, [sliderInterval, stop]);

  const onButtonClick = (event) => {
    setStop(true);
    if (event.target.parentElement.value === 'r') {
      counter === aniList.data.length - 1
        ? setCounter(0)
        : setCounter(counter + 1);
    } else {
      counter === 0
        ? setCounter(aniList.data.length - 1)
        : setCounter(counter - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapInner} ref={wrapInner}>
        {aniList &&
          aniList.data.map((elem, index) => {
            return <WrapElem data={elem} rang={index + 1} key={elem.id} />;
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
