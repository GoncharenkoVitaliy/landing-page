import { useState } from "react";
import styles from "./Navbar.module.css";
import MenuBurger from "../UI/BurgerMenu/MenuBurger";
import MyA from "../UI/MyA/MyA";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  let open = menu
    ? `${styles.aside_wrapper} ${styles.active_menu}`
    : `${styles.aside_wrapper}`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logo_image}>
          <img alt="" src={require("../images/photo-001.jpeg")} />
        </div>
        <p className={styles.magic}>Frontend Magic</p>
      </div>
      <div className={open}>



        <ul className={styles.aside}>
          <li className={styles.aside__menu}>
            <Link to="/">Обомне</Link>
          </li>
          <li className={styles.aside__menu}>
            <Link to="/contact">Связь со мной</Link>
          </li>
          <li className={styles.aside__menu}>
            <Link to="/myWork">Мои проекты</Link>
          </li>
        </ul>



        
        <div className={styles.btn_nav}>
          <MyA
            target="_blank"
            active={true}
            link="https://github.com/GoncharenkoVitaliy"
          >
            Узнать больше
          </MyA>
        </div>
      </div>
      <div onClick={() => setMenu(!menu)} className={styles.toggle_btn}>
        <MenuBurger menu={menu} />
      </div>
      <Outlet />
    </nav>
  );
}
