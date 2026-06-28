import appStyles from "../../App.module.css";
import styles from "./Nav.module.css";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <a href="#">CasePilot</a>
      </div>
      <div className={styles.actions}>
        <button
          className={appStyles.btnDark}
          onClick={() => scrollTo("book-demo")}
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
}
