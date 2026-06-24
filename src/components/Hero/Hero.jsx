import appStyles from '../../App.module.css'
import styles from './Hero.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Case management for law firms</p>
      <h1 className={styles.title}>
        Keep every client in the loop, without lifting a finger.
      </h1>
      <p className={styles.subtitle}>
        CasePilot tracks every case stage and sends clients automatic updates,
        so your firm never has to answer "what's the status?" again.
      </p>
      <div className={styles.ctas}>
        <button
          className={`${appStyles.btnDark} ${appStyles.btnLarge}`}
          onClick={() => scrollTo('waitlist')}
        >
          Get Early Access
        </button>
        <button
          className={`${appStyles.btnGhost} ${appStyles.btnLarge}`}
          onClick={() => scrollTo('how')}
        >
          See how it works
        </button>
      </div>
    </section>
  )
}
