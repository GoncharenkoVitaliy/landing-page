import styles from "./MenuBurger.module.css";

export default function MenuBurger({ menu }: { menu: boolean }) {
  let open = menu
    ? `${styles.burger_open} ${styles.burger}`
    : `${styles.burger}`;

  return (
    <div>
      <div className={open}></div>
    </div>
  );
}
