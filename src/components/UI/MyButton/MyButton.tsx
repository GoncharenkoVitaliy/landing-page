import styles from "./MyButton.module.css";

interface IBtn {
  children: string;
  onClick?: () => void;
  active?: boolean;
  type?: 'submit' | 'button';
}

export default function MyButton({ children, onClick, active, type }: IBtn) {
  const color = active ? styles.btn_aqua : styles.btn_white;

  return (
    <button type={type} className={`${styles.btn} ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
