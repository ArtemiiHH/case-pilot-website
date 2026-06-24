import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <p className={styles.eyebrow}>How it works</p>
      <h2 className={styles.title}>Three steps. No training required.</h2>

      <div className={styles.stepsGrid}>
        <div className={styles.step}>
          <span className={styles.stepNumber}>01</span>
          <h3>Add a case</h3>
          <p>Create a case in seconds with the client's name, case type, and starting stage.</p>
          <div className={styles.screenshotSlot}>
            <span>Add case form</span>
            {/* Replace with: <img src="screenshot-add-case.png" alt="Add case form" /> */}
          </div>
        </div>

        <div className={styles.step}>
          <span className={styles.stepNumber}>02</span>
          <h3>Send an update</h3>
          <p>Move the case to its next stage and CasePilot notifies the client automatically.</p>
          <div className={styles.screenshotSlot}>
            <span>Send update panel</span>
            {/* Replace with: <img src="screenshot-send-update.png" alt="Send update panel" /> */}
          </div>
        </div>

        <div className={styles.step}>
          <span className={styles.stepNumber}>03</span>
          <h3>Client stays informed</h3>
          <p>Your client checks one page anytime to see exactly where their case stands.</p>
          <div className={styles.screenshotSlot}>
            <span>Client tracking page</span>
            {/* Replace with: <img src="screenshot-client-view.png" alt="Client tracking page" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
