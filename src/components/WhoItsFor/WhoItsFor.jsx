import styles from "./WhoItsFor.module.css";

export default function WhoItsFor() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Who it's for</p>
        <h2 className={styles.title}>
          Built for firms who don't have time for busywork.
        </h2>

        {/* Cards */}
        <div className={styles.cardGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3>Solo practitioners</h3>
            <p>
              Stop answering "what's the status?" calls. Update a case once and
              your client sees it instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3>Small law firms</h3>
            <p>
              Keep every paralegal and partner aligned on where each case
              stands, without another status meeting.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3>Medium law firms</h3>
            <p>
              Standardize client communication across every practice group.
              Every client gets the same professional experience, no matter
              which attorney handles their case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
