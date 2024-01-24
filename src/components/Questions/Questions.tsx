import arrayQuestions, { iArrayQuestions } from "../array/arrayQuestions";
import styles from "./Questions.module.css";

export default function Questions() {
  return (
    <section className={styles.wrapper}>
      <h1>Часто задаваемые вопросы</h1>
      {arrayQuestions.map((questions) => {
        return (
          <div key={questions.id} className={styles.inner}>
            <h2>{questions.subtitle}</h2>
            <p>{questions.text}</p>
          </div>
        );
      })}
    </section>
  );
}
