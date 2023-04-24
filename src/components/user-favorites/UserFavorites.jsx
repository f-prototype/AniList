import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSelect } from '../../slices/animeListSlice';
import styles from './UserFavorites.module.css';

export const UserFavorites = ({ link }) => {
  const refLink = useRef(link);
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let response = await fetch(
        refLink.current + '?page%5Blimit%5D=9&page%5Boffset%5D=0'
      );
      let result = await response.json();
      result.data.map(async (elem) => {
        let response = await fetch(elem.relationships.item.links.related);
        let result = await response.json();
        setFavorites((favorites) => [...favorites, result]);
      });
    })();
  }, []);

  const getImg = (elem) => {
    if (elem.data.type !== 'characters')
      return elem.data.attributes.posterImage.original;
    return elem.data.attributes.image.original;
  };

  return (
    <div className={styles.container}>
      {[...favorites].length && (
        <>
          <h6 className={styles.h}>Favorites</h6>
          <div className={styles.images}>
            {favorites.map((el) => {
              return (
                <div className={styles.imgContainer} key={el.data.id}>
                  <img
                    src={getImg(el)}
                    alt="img"
                    className={styles.img}
                    onClick={() => {
                      if (el.data.type !== 'anime') return;
                      dispatch(setSelect(el.data));
                      localStorage.setItem('anime', JSON.stringify(el.data));
                      navigate('/' + el.data.attributes.slug);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
