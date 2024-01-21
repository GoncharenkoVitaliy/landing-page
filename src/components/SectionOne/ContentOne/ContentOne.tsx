import React from "react";
import styles from "./ContentOne.module.css";
import MyButton from "../../UI/MyButton/MyButton";
import MyA from "../../UI/MyA/MyA";

export default function ContentOne() {
  const handleClick = () => {
    console.log("Погрузиться");
  };

  return (
    <div className={styles.content_wrapper}>
      {/* <h1>Frontend developer</h1> */}
      <h1 className={styles.content_text}>
      Привет, меня зовут Виталий.
      </h1>
      <MyA target='_blank' active={false} link="https://github.com/GoncharenkoVitaliy" >
        Погрузиться
      </MyA>
    </div>
  );
}
