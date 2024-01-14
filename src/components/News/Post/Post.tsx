import MyA from '../../UI/MyA/MyA';
import { iArrayNews } from '../arrayNews';
import styles from './Post.module.css';

export default function Post({id, image, sabtitle, date, text, link}: iArrayNews) {
  return (
    <>
        <img src={image} alt="" className={styles.photo} />
        <h2>{sabtitle}</h2>
        <p className={styles.date}>{date}</p>
        <p>{text}</p>
        <MyA link={link} active={true}>Узнать</MyA>
    </>
  )
}