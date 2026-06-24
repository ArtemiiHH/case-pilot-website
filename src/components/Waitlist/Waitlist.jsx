import { useState } from 'react'
import appStyles from '../../App.module.css'
import styles from './Waitlist.module.css'

export default function Waitlist() {
  const [email, setEmail] = useState('')

  // TODO: wire up form submission when backend is added

  return (
    <section id="waitlist" className={styles.section}>
      <h2 className={styles.title}>Be first in line.</h2>
      <p className={styles.subtitle}>
        We're onboarding a small group of firms before opening up more broadly.
      </p>
      <div className={styles.emailForm}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="you@lawfirm.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={appStyles.btnDark}>Request Access</button>
      </div>
    </section>
  )
}
