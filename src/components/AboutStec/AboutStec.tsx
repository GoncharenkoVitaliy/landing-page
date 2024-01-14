import styles from "./AboutStec.module.css";
import arrayAbout, { iArrayAbout } from "./arrayAbout";

export default function AboutStec() {
  return (
    <section className={styles.wrapper}>
      {arrayAbout.map((about: iArrayAbout) => {
        return (
          <div className={styles.wrap} key={about.subtitle}>
            <div className={styles.content}>
              <h1>{about.subtitle}</h1>
              <p>{about.text1}</p>
              <p>{about.text2}</p>
              <p>{about.text3}</p>
            </div>
            <div className={styles.image}>
              <img src={about.photo} alt="" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
