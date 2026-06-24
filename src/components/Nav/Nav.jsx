import appStyles from '../../App.module.css'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>CasePilot</div>
      <div className={styles.actions}>
        <button className={appStyles.btnGhost}>Log in</button>
        <button className={appStyles.btnDark}>Get Early Access</button>
      </div>
    </header>
  )
}
