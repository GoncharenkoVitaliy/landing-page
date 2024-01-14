import styles from "./News.module.css";
import Post from "./Post/Post";
import arrayNews, { iArrayNews } from "./arrayNews";

export default function News() {
  return (
    <section className={styles.wrapper}>
      <h1>Последние новости</h1>
      <div className={styles.container}>
        {arrayNews.map((news: iArrayNews) => {
          return (
            <div className={styles.wrap} key={news.id}>
              <Post
                id={news.id}
                image={news.image}
                sabtitle={news.sabtitle}
                date={news.date}
                text={news.text}
                link={news.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
