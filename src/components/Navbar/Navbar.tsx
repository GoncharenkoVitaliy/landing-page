import { useState } from "react";
import styles from "./Navbar.module.css";
import MenuBurger from "../UI/BurgerMenu/MenuBurger";
import MyA from "../UI/MyA/MyA";

export default function Navbar() {
  const [click, setClick] = useState(0);
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    setClick(click + 1);
    console.log("Узнать больше");
  };

  let open = menu
    ? `${styles.aside_wrapper} ${styles.active_menu}`
    : `${styles.aside_wrapper}`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logo_image}>
          <img alt='' src={require("../images/photo-001.jpeg")} />
        </div>
        <p className={styles.magic}>Frontend Magic</p>
      </div>
      <div className={open}>
        <ul className={styles.aside}>
          <li className={styles.aside__menu}>
            <a href="#">О проекте</a>
          </li>
          <li className={styles.aside__menu}>
            <a href="#">Технологии</a>
          </li>
          <li className={styles.aside__menu}>
            <a href="https://github.com/GoncharenkoVitaliy">Отзывы</a>
          </li>
        </ul>
        <div className={styles.btn_nav}>
          <MyA target="_blank" active={true} link="https://github.com/GoncharenkoVitaliy">
            Узнать больше
          </MyA>
        </div>
      </div>
      <div onClick={() => setMenu(!menu)} className={styles.toggle_btn}>
        <MenuBurger menu={menu} />
      </div>
    </nav>
  );
}
