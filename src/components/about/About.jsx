import { useState, useEffect } from 'react';
import { MyLi } from '../UI/li/MyLi';
import styles from './About.module.css';

export default function About({ currentInfo }) {
  const [waifu, setWaifu] = useState(null);

  useEffect(() => {
    fetch(currentInfo.current.data.relationships.waifu.links.related)
      .then((response) => response.json())
      .then((result) => setWaifu(result));
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
        <MyLi img="" name={currentInfo.current.data.attributes.waifuOrHusbando}>
          {waifu ? (
            <>
              <span>
                <img
                  src={waifu.data.attributes.image.tiny}
                  className={styles.waifu}
                  alt="waifu"
                />
              </span>
              <span>{waifu.data.attributes.canonicalName}</span>
            </>
          ) : (
            <span>secret</span>
          )}
        </MyLi>
        <MyLi img="" name="Gender:">
          {<span>{getInfo(currentInfo.current.data.attributes.gender)}</span>}
        </MyLi>
        <MyLi img="" name="Location:">
          <span>{getInfo(currentInfo.current.data.attributes.location)}</span>
        </MyLi>
        <MyLi img="" name="Birthday:">
          <span>{getDate(currentInfo.current.data.attributes.birthday)}</span>
        </MyLi>
        <MyLi img="" name="Created:">
          <span>{getDate(currentInfo.current.data.attributes.createdAt)}</span>
        </MyLi>
      </ul>
    </div>
  );
}
