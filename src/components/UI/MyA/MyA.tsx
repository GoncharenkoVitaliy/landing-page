import styles from "./MyA.module.css";

interface iMyA {
  link: string;
  children: string;
  active: boolean;
  target: string;
}

export default function MyA({ link, children, active, target }: iMyA) {
  const color = active ? styles.link_aqua : styles.link_white;

  return (
    <a target={target} href={link} className={`${styles.link} ${color}`}>
      {children}
    </a>
  );
}
