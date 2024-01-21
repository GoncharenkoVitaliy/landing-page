import Github from "../images/svg/Github";
import Yandex from "../images/svg/Yandex";
import Telegram from "../images/svg/Telegram";
import styles from "./Footer.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyHandler = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500); // Hide the success message after 2.5 seconds
  };

  return (
    <section className={styles.footer}>
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
          <a
            href="https://t.me/VitaliyGoncharenkoPMR"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram className={styles.active} />
          </a>
          <a
            href="https://github.com/GoncharenkoVitaliy"
            target="_blank"
            rel="noreferrer"
          >
            <Github className={styles.active} />
          </a>
          <CopyToClipboard text="Goncharenko1610@yandex.ru" onCopy={onCopyHandler}>
            <button>
              <Yandex className={styles.active} />
            </button>
          </CopyToClipboard>
          {isCopied && <p className={styles.alert_success}>Скопированно</p>}
        </div>
      </div>
    </section>
  );
}
