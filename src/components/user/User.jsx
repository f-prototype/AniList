import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserWallpaper } from '../user-wallpaper/UserWallpaper';
import { UserInfo } from '../user-info/UserInfo';
import { UserCommentsList } from '../user-comments-list/UserCommentsList';
import styles from './User.module.css';
import { Login } from '../user-login/Login';
import { useState } from 'react';

export const User = () => {
  const info = useSelector((state) => state.animeList.user);
  const localInfo = useRef(JSON.parse(localStorage.getItem('user')));
  const currentInfo = useRef(
    Object.keys(info).length ? info : localInfo.current
  );
  const [register, setRegister] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <UserWallpaper currentInfo={currentInfo.current} addModal={setRegister} />
      <div className={styles.main}>
        <UserCommentsList user={currentInfo.current} />
        <UserInfo currentInfo={currentInfo} />
        <Login register={register} setRegister={setRegister} />
      </div>
    </div>
  );
};
//ССЫЛКА НА ВСЕ КОММЕНТАРИИ ПОЛЬЗОВАТЕЛЯ
//https://kitsu.io/api/edge/media-reactions?filter%5BuserId%5D=94252
