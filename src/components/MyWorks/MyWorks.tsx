import styles from "./MyWorks.module.css";
import arrayWorks from "./arrayWorks";

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
                  <p className={styles.box}>
                      <a className={styles.link} href={work.link} target="_blank">
                        {work.title}
                      </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
    </section>
  );
}
