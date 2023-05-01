import styles from './Login.module.css';
import backImg from '../../img/background.jpg';
import { useRef } from 'react';

export const Login = ({ register, setRegister }) => {
  const modalRef = useRef(null);
  return (
    <div
      className={
        !register ? styles.container : `${styles.container} ${styles.open}`
      }
      onClick={(event) =>
        event.target.classList.contains(styles.container)
          ? setRegister(false)
          : ''
      }
      ref={modalRef}
    >
      <div className={styles.login}>
        <div className={styles.imgContainer}>
          <img src={backImg} alt="img" className={styles.img} />
        </div>
        <form
          className={styles.main}
          onSubmit={(event) => {
            event.preventDefault();
            const target = event.target;
            if (
              target.username.value &&
              target.email.value &&
              target.password.value
            ) {
              target.parentElement.classList.remove(styles.eror);
              target.parentElement.classList.add(styles.ok);
            } else {
              target.parentElement.classList.remove(styles.ok);
              target.parentElement.classList.add(styles.eror);
            }
          }}
        >
          <p>
            Create an account to track, share and discover anime in a uniquely
            social way.
          </p>
          <label className={styles.label}>
            <input
              placeholder="Username.."
              className={styles.input}
              name="username"
            />
          </label>
          <label className={styles.label}>
            <input
              placeholder="Email.."
              className={styles.input}
              type="email"
              name="email"
            />
          </label>
          <label className={styles.label}>
            <input
              type="password"
              placeholder="Password.."
              className={styles.input}
              autoComplete="true"
              name="password"
            />
          </label>
          <button className={styles.btn}>Sign up</button>
          <p className={styles.description}>
            *At the moment the registration and login function is not available*
          </p>
        </form>
      </div>
    </div>
  );
};
