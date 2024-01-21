import ContentOne from "./ContentOne/ContentOne";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={`${styles.menu} ${styles.photo_container}`}>
        <ContentOne />
    </section>
  );
}
