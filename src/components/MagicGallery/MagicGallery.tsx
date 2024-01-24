import styles from "./MagicGallery.module.css";
import arrayMagicGallery from "../array/arrayMagicGallery";

export default function MagicGallery() {
  return (
    <section className={styles.wrapper}>
      <h1>Волшебная галерея</h1>
      <ul className={styles.container}>
        {arrayMagicGallery.map((image) => {
          return (
            <li className={image.classNames} key={image.id}>
              <img alt="" src={image.src} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
