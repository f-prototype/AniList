import { useState, useEffect } from 'react';
import { MyLi } from '../UI/li/MyLi';
import partner from '../../img/svg/heart.svg';
import genger from '../../img/svg/user.svg';
import location from '../../img/svg/marker.svg';
import birthday from '../../img/svg/cake-birthday.svg';
import calendar from '../../img/svg/calendar.svg';
import styles from './About.module.css';

export default function About({ currentInfo }) {
  const [waifu, setWaifu] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        currentInfo.current.data.relationships.waifu.links.related
      );
      const result = response.json();
      setWaifu(result);
    })();
  }, [currentInfo]);

  const getInfo = (info) => {
    if (info !== null && info !== '') return info;
    return 'secret';
  };

  const getDate = (info) => {
    return getInfo(info).slice(0, 10).split('-').reverse().join('.');
  };

  return (
    <div className={styles.about}>
      <h6>About</h6>
      <p>{currentInfo.current.data.attributes.about}</p>

      <ul className={styles.info}>
        {waifu !== null && waifu.data && (
          <MyLi
            img={partner}
            name={currentInfo.current.data.attributes.waifuOrHusbando + ':'}
          >
            <>
              <span>
                <img
                  src={waifu.data.attributes.image.original}
                  className={styles.waifu}
                  alt="waifu"
                />
              </span>
              <span>{waifu.data.attributes.canonicalName}</span>
            </>
          </MyLi>
        )}
        <MyLi img={genger} name="Gender:">
          {<span>{getInfo(currentInfo.current.data.attributes.gender)}</span>}
        </MyLi>
        <MyLi img={location} name="Location:">
          <span>{getInfo(currentInfo.current.data.attributes.location)}</span>
        </MyLi>
        <MyLi img={birthday} name="Birthday:">
          <span>{getDate(currentInfo.current.data.attributes.birthday)}</span>
        </MyLi>
        <MyLi img={calendar} name="Created:">
          <span>{getDate(currentInfo.current.data.attributes.createdAt)}</span>
        </MyLi>
      </ul>
    </div>
  );
}
