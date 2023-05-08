import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserWallpaper } from '../user-wallpaper/UserWallpaper';
import { UserInfo } from '../user-info/UserInfo';
import { UserCommentsList } from '../user-comments-list/UserCommentsList';
import styles from './User.module.css';
import { Login } from '../user-login/Login';
import { useState } from 'react';

export const User = () => {
  const info = useSelector((state) => state.animeList.user);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <UserWallpaper currentInfo={info} addModal={setRegister} />
      <div className={styles.main}>
        <UserCommentsList user={info} />
        <UserInfo currentInfo={info} />
        <Login register={register} setRegister={setRegister} />
      </div>
    </div>
  );
};
//ССЫЛКА НА ВСЕ КОММЕНТАРИИ ПОЛЬЗОВАТЕЛЯ
//https://kitsu.io/api/edge/media-reactions?filter%5BuserId%5D=94252
