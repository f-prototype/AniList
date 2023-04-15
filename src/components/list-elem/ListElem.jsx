import { Link } from 'react-router-dom';
import style from './ListElem.module.css';
import rating from '../../img/popcorn.svg';
import top from '../../img/top.svg';
import { useDispatch } from 'react-redux';
import { setSelect } from '../../slices/animeListSlice';

function ListElem({ info }) {
  const dispatch = useDispatch();
  return (
    <Link to={info.attributes.slug} className="link">
      <div
        className={style.elem}
        onClick={() => {
          localStorage.setItem('anime', JSON.stringify(info));
          dispatch(setSelect(info));
        }}
      >
        <div className={style.imgContainer}>
          <img
            src={info.attributes.posterImage.original}
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
