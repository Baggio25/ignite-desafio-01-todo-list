
import TodoLogo from "../../assets/Logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <img src={TodoLogo} />
    </header>
  )
}