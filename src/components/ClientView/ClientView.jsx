import styles from './ClientView.module.css'

const progressDots = [true, true, true, false, false]

const history = [
  { stage: 'Discovery started', timestamp: 'Jun 22' },
  { stage: 'In Review completed', timestamp: 'Jun 18' },
]

export default function ClientView() {
  return (
    <section className={styles.section}>
      <div className={styles.splitText}>
        <p className={styles.eyebrow}>For your clients</p>
        <h2 className={styles.title}>A page they'll actually check.</h2>
        <p className={styles.body}>
          Every client gets a private link to a simple page showing exactly
          where their case stands — no login, no app to download, no calling
          your office to ask.
        </p>
      </div>

      <div className={styles.splitVisual}>
        <div className={styles.miniCard}>
          <h3 className={styles.stageTitle}>Discovery</h3>
          <div className={styles.dotRow}>
            {progressDots.map((active, i) => (
              <span key={i} className={active ? styles.dotActive : styles.dot} />
            ))}
          </div>
          <div className={styles.history}>
            {history.map((row) => (
              <div className={styles.historyRow} key={row.stage}>
                <span>{row.stage}</span>
                <span className={styles.historyTimestamp}>{row.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
