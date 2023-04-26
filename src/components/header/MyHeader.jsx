import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../form/Form';
import logo from '../../img/logo.png';
import styles from './MyHeader.module.css';

export const MyHeader = () => {
  const elem = useRef(null);
  window.onscroll = () => {
    if (window.pageYOffset > 0) {
      elem.current.classList.add(styles.back);
    } else {
      elem.current.classList.remove(styles.back);
    }
  };
  return (
    <div className={styles.container} ref={elem}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <Form />
    </div>
  );
};
