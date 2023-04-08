import { Form } from '../form/Form';
import styles from './MyHeader.module.css';
import logo from '../../img/logo.png';
import { useRef } from 'react';

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
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <Form />
    </div>
  );
};
