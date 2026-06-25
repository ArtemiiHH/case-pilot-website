import appStyles from "../../App.module.css";
import styles from "./Hero.module.css";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Case management for law firms</p>
      <h1 className={styles.title}>
        Automate <i className={styles.titleItalic}>case updates</i> for your Law
        Firm
      </h1>
      <p className={styles.subtitle}>
        Automatically notify clients when their case moves forward — no calls,
        no emails.
      </p>
      <div className={styles.ctas}>
        <button
          className={`${appStyles.btnDark} ${appStyles.btnLarge}`}
          onClick={() => scrollTo("book-demo")}
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
}
