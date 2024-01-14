import styles from "./MyButton.module.css";

interface IBtn {
  children: string;
  onClick: () => void;
  active: boolean;
}

export default function MyButton({ children, onClick, active }: IBtn) {
  const color = active ? styles.btn_aqua : styles.btn_white;

  return (
    <button className={`${styles.btn} ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
