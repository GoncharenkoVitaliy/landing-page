import MyA from "../../UI/MyA/MyA";
import { iArrayNews } from "../arrayNews";
import styles from "./Post.module.css";

export default function Post({ ...posts }: iArrayNews) {
  return (
    <>
      <img src={posts.image} alt="" className={styles.photo} />
      <h2 className={styles.subtitle}>{posts.sabtitle}</h2>
      <p className={styles.date}>{posts.date}</p>
      <p className={styles.date}>{posts.text}</p>
      <MyA target={posts.target} link={posts.link} active={true}>
        Узнать
      </MyA>
    </>
  );
}
