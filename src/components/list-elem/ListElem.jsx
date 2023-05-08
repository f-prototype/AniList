import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setState } from '../../slices/animeListSlice';
import rating from '../../img/svg/popcorn.svg';
import top from '../../img/svg/top.svg';
import style from './ListElem.module.css';

function ListElem({ info }) {
  const dispatch = useDispatch();
  return (
    <Link to={info.attributes.slug} className="link">
      <div
        className={style.elem}
        onClick={() => {
          localStorage.setItem('anime', JSON.stringify(info));
          dispatch(setState({ value: info, name: 'select' }));
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
