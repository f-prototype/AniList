import styles from './Wrapper.module.css';
// import back from '../../img/background.jpg';
import { WrapElem } from '../wrap-elem/WrapElem';
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
    fetch(
      'https://kitsu.io/api/edge/anime?page%5Blimit%5D=13&page%5Boffset%5D=0&sort=popularityRank'
    )
      .then((response) => response.json())
      .then((result) => {
        setAniList(result);
      });
  }, []);

  const sliderInterval = useCallback(() => {
    counter === arr.length - 1
      ? setCounter(0)
      : setCounter((counter) => counter + 1);
  }, [arr, counter]);

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
    if (event.target.value === 'r') {
      counter === arr.length - 1 ? setCounter(0) : setCounter(counter + 1);
    } else {
      counter === 0 ? setCounter(arr.length - 1) : setCounter(counter - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapInner} ref={wrapInner}>
        {aniList &&
          aniList.data.map((elem) => {
            return (
              <WrapElem
                info={22}
                img={elem.attributes.coverImage.original}
                key={elem.id}
              />
            );
          })}
      </div>
      <div className={styles.btnContainer} onClick={onButtonClick}>
        <button value="r">R</button>
        <button value="l">L</button>
      </div>
    </div>
  );
};
