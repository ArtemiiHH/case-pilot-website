import { useEffect } from "react";
import styles from "./BookDemo.module.css";

const CALENDLY_URL = "https://calendly.com/artemii-barashkov-dev/30min";

export default function BookDemo() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="book-demo" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>See CasePilot in action</h2>
        <p className={styles.subtitle}>
          30 minutes. I'll walk you through the tool live.
        </p>
        <div
          className={`calendly-inline-widget ${styles.embed}`}
          data-url={CALENDLY_URL}
        />
      </div>
    </section>
  );
}
