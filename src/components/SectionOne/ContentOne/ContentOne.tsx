import React from "react";
import styles from "./ContentOne.module.css";
import MyButton from "../../UI/MyButton/MyButton";

export default function ContentOne() {
  const handleClick = () => {
    console.log("Погрузиться");
  };

  return (
    <div className={styles.content_wrapper}>
      <h1>Junior Frontend</h1>
      <p className={styles.content_text}>
        The magic of adaptive layout in HTML, CSS, and JS. Discover the world of
        React and Redux Toolkit!
      </p>
      <MyButton active={false} onClick={handleClick}>
        Погрузиться
      </MyButton>
    </div>
  );
}
