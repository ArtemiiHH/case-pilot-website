import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>CasePilot</div>
      <div className={styles.links}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        {/* Update email hello@casepilot.io when domain is confirmed */}
        <a href="mailto:hello@casepilot.io">Contact</a>
      </div>
      <div className={styles.copyright}>© 2026 CasePilot</div>
    </footer>
  );
}
