import { Fragment } from 'react'
import styles from './ProductGraphic.module.css'

const steps = ['Filed', 'In Review', 'Discovery', 'Negotiation', 'Resolved']
const activeStepIndex = 2

const history = [
  { stage: 'Discovery started', timestamp: 'Jun 22, 2026 · 9:14 AM' },
  { stage: 'In Review completed', timestamp: 'Jun 18, 2026 · 2:41 PM' },
  { stage: 'Case filed', timestamp: 'Jun 10, 2026 · 11:02 AM' },
]

export default function ProductGraphic() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.firmHeader}>
            <div className={styles.firmLogo} />
            <span className={styles.firmName}>Harlow & Reed LLP</span>
          </div>

          <div className={styles.caseInfo}>
            <p className={styles.caseLabel}>Case #2026-0417 · Smith v. Bowen</p>
            <h3 className={styles.stageTitle}>Discovery</h3>
            <p className={styles.timestamp}>Last updated Jun 22, 2026 · 9:14 AM</p>
          </div>

          <div className={styles.timeline}>
            {steps.map((step, i) => (
              <Fragment key={step}>
                <div className={styles.stepNode}>
                  <div
                    className={
                      i <= activeStepIndex ? styles.stepCircleActive : styles.stepCircle
                    }
                  >
                    {i <= activeStepIndex && <span className={styles.stepDot} />}
                  </div>
                  <span className={styles.stepLabel}>{step}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </Fragment>
            ))}
          </div>

          <div className={styles.historyBox}>
            {history.map((row) => (
              <div className={styles.historyRow} key={row.stage}>
                <span className={styles.historyStage}>{row.stage}</span>
                <span className={styles.historyTimestamp}>{row.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
