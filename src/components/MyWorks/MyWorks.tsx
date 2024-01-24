import styles from "./MyWorks.module.css";
import arrayWorks from "../array/arrayWorks";

export default function MyWorks() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Мои проекты</h1>
        <ul className={styles.list}>
          {arrayWorks.map((work) => {
            return (
              <li key={work.id} className={styles.item}>
                <img src={work.works} alt="loading..." />
                <a href={work.link} target="_blank" className={styles.box}>
                  <p className={styles.link}>{work.title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
