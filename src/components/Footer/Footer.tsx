import Github from "../images/svg/Github";
import Gmail from "../images/svg/Gmail";
import Telegram from "../images/svg/Telegram";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1>Гончаренко Виталий</h1>
      <div className={styles.inner}>
        <div className={styles.phone}>
          <a href="tel:+37377895764">
            <div className={styles.connection}>
              <h2 className={styles.h2One}>Связь со мной: </h2>
              <h2 className={styles.h2Two}> +373 (778) 957-64</h2>
            </div>
          </a>
        </div>
        <div className={styles.svg}>
          <a href="#">
            <Telegram className={styles.active} />
          </a>
          <a href="#">
            <Github className={styles.active} />
          </a>
          <a href="#">
            <Gmail className={styles.active} />
          </a>
        </div>
      </div>
    </div>
  );
}
