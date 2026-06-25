import appStyles from "../../App.module.css";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>CasePilot</div>
      <div className={styles.actions}>
        <button className={appStyles.btnDark}>Book a Demo</button>
      </div>
    </header>
  );
}
