import styles from './WhoItsFor.module.css'

export default function WhoItsFor() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Who it's for</p>
        <h2 className={styles.title}>Built for firms who don't have time for busywork.</h2>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Solo practitioners</h3>
            <p>
              Stop answering "what's the status?" calls. Update a case once
              and your client sees it instantly.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Small law firms</h3>
            <p>
              Keep every paralegal and partner aligned on where each case
              stands, without another status meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
