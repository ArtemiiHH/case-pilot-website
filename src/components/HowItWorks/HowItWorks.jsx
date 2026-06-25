import styles from "./HowItWorks.module.css";
import addCaseImg from "../../images/add-case.png";
import clientNotificationImg from "../../images/client-notification.png";
import caseOpenedImg from "../../images/case-opened.png";

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <p className={styles.eyebrow}>How it works</p>
      <h2 className={styles.title}>Three steps. No training required.</h2>

      {/* Step cards */}
      <div className={styles.stepsGrid}>
        {/* Step Card 1 */}
        <div className={styles.step}>
          <div className={styles.screenshotSlot}>
            <div className={styles.imgFrame}>
              <img
                src={addCaseImg}
                alt="Add case form"
                className={styles.imgAddCase}
              />
            </div>
          </div>
          <div className={styles.stepBody}>
            <span className={styles.stepNumber}>01</span>
            <h3>Add a case</h3>
            <p>
              Create a case in seconds with the client's name, case type, and
              starting stage.
            </p>
          </div>
        </div>

        {/* Step Card 2 */}
        <div className={styles.step}>
          <div className={styles.screenshotSlot}>
            <div className={styles.imgFrame}>
              <img
                src={clientNotificationImg}
                alt="Client notification email"
                className={styles.imgClientNotification}
              />
            </div>
          </div>
          <div className={styles.stepBody}>
            <span className={styles.stepNumber}>02</span>
            <h3>Send an update</h3>
            <p>
              Move the case to its next stage and CasePilot notifies the client
              automatically.
            </p>
          </div>
        </div>

        {/* Step Card 3 */}
        <div className={styles.step}>
          <div className={styles.screenshotSlot}>
            <div className={styles.imgFrame}>
              <img
                src={caseOpenedImg}
                alt="Client tracking page"
                className={styles.imgCaseOpened}
              />
            </div>
          </div>
          <div className={styles.stepBody}>
            <span className={styles.stepNumber}>03</span>
            <h3>Client sees it instantly</h3>
            <p>
              Your client checks one page anytime to see exactly where their
              case stands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
