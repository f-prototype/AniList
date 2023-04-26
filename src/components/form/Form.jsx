import { useState, useRef } from 'react';
import { SearchElem } from '../search-elem/SearchElem';
import search from '../../img/search.png';
import styles from './Form.module.css';

export const Form = () => {
  const innerRef = useRef();
  const [onSearch, setSearch] = useState();

  const onSub = (event) => {
    event.preventDefault();
    fetch(
      `https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&page%5Boffset%5D=0&filter[text]=${event.target[0].value}`
    )
      .then((response) => response.json())
      .then((result) => {
        setSearch(result);
        innerRef.current.classList.add(styles.open);
      });
  };
  return (
    <form
      action="#"
      className={styles.form}
      autoComplete="off"
      onSubmit={onSub}
    >
      <input
        type="text"
        placeholder="Search by name"
        name="search"
        maxLength={18}
        className={styles.input}
        onClick={() => {
          innerRef.current.classList.remove(styles.open);
        }}
      />
      <div className={styles.searchInner} ref={innerRef}>
        {onSearch &&
          onSearch.data.map((elem) => <SearchElem inf={elem} key={elem.id} />)}
      </div>
      <button type="submit" className={styles.btn}>
        <img className={styles.search} alt="search" src={search} />
      </button>
    </form>
  );
};
