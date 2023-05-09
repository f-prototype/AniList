import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setState } from '../../slices/animeListSlice';
import rating from '../../img/svg/popcorn.svg';
import top from '../../img/svg/top.svg';
import style from './ListElem.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function ListElem({ info }) {
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );
    const current = imgRef.current;
    if (current) imageObserver.observe(current);
    return () => {
      if (current) imageObserver.unobserve(current);
    };
  }, [imgRef]);

  return (
    <Link to={info.attributes.slug} className="link">
      <div
        className={style.elem}
        onClick={() => {
          dispatch(setState({ value: info, name: 'select' }));
        }}
      >
        <div className={style.imgContainer}>
          <img
            data-src={info.attributes.posterImage.original}
            ref={imgRef}
            // src={info.attributes.posterImage.original}
            alt="img"
            className={style.img}
          />
        </div>
        <div className={style.mainContent}>
          <div className={style.infoContainer}>
            <div className={style.info}>
              <p className={style.title}>{info.attributes.canonicalTitle}</p>
              <p className={style.text}>{`${
                info.attributes.startDate
                  ? info.attributes.startDate.slice(0, 4)
                  : 'announcement'
              }, ${info.attributes.subtype}`}</p>
            </div>
            <div className={style.raitingContainer}>
              <div className={style.iconsContainer}>
                <img src={rating} alt="reting" className={style.icons} />
                {info.attributes.averageRating
                  ? info.attributes.averageRating + '%'
                  : '00.00'}
              </div>
              <div className={style.iconsContainer}>
                <img src={top} alt="reting" className={style.icons} />
                {info.attributes.popularityRank
                  ? info.attributes.popularityRank
                  : '00.00'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListElem;
