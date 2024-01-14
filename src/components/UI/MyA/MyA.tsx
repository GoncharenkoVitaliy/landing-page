import styles from './MyA.module.css';

interface iMyA {
    link: string;
    children: string;
    active: boolean;
}

export default function MyA({link, children, active}: iMyA) {
  const color = active ? styles.link_aqua : styles.link_white;

  return (
    <a href={link} className={`${styles.link} ${color}`}>{children}</a>
  )
}
