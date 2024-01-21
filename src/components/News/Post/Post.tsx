import MyA from "../../UI/MyA/MyA";
import { iArrayNews } from "../arrayNews";
import styles from "./Post.module.css";

export default function Post({
  image,
  sabtitle,
  date,
  text,
  link,
  target,
}: iArrayNews) {
  return (
    <>
      <img src={image} alt="" className={styles.photo} />
      <h2 className={styles.subtitle}>{sabtitle}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.date}>{text}</p>
      <MyA target={target} link={link} active={true}>
        Узнать
      </MyA>
    </>
  );
}
