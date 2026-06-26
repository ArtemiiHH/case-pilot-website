import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./Legal.module.css";

export default function Privacy() {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: [Date] · Effective: [Date]</p>

        <p>
          This Privacy Policy explains how [Your Law Firm Name] ("we", "us", or
          "our") collects, uses, and protects personal data when you use
          CasePilot, our case management platform. We are committed to complying
          with the EU General Data Protection Regulation (GDPR) and applicable
          Cypriot data protection law.
        </p>

        <hr />

        <h2>1. Who we are</h2>
        <p>
          The data controller is [Your Law Firm Name], registered at [Registered
          Address, Cyprus], registration number [Reg. No.]. For data protection
          enquiries, contact us at [privacy@yourfirm.com].
        </p>

        <h2>2. What data we collect</h2>
        <p>We collect and store the following personal data about clients:</p>
        <ul>
          <li>First name and last name</li>
          <li>Email address</li>
          <li>Case type (e.g. Personal Injury, Immigration, Criminal Defence)</li>
          <li>Case stage and update history</li>
          <li>Notes added by the assigned lawyer</li>
        </ul>
        <p>
          We do not collect sensitive special-category data (such as health,
          biometric, or financial data) through this platform.
        </p>

        <h2>3. Why we collect it and our lawful basis</h2>
        <p>
          We process your data to manage and administer your legal case. Our
          lawful basis under GDPR Article 6 is:
        </p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> — to deliver the legal
            services you engaged us for
          </li>
          <li>
            <strong>Legitimate interests</strong> — to maintain accurate case
            records and communicate updates to you
          </li>
          <li>
            <strong>Legal obligation</strong> — where applicable law requires us
            to retain certain records
          </li>
        </ul>

        <h2>4. How long we keep your data</h2>
        <p>
          We retain client data for [e.g. 7 years] from the date your case is
          closed, in accordance with legal professional obligations and applicable
          limitation periods. After this period, data is securely deleted.
        </p>

        <h2>5. Who we share data with</h2>
        <p>
          We do not sell or share your personal data with third parties for
          marketing. Data may be shared with:
        </p>
        <ul>
          <li>
            Our database and hosting provider ([e.g. Supabase / Firebase]), with
            whom we have a Data Processing Agreement
          </li>
          <li>Courts, regulatory bodies, or authorities where required by law</li>
          <li>
            Other legal professionals engaged by your firm on your matter, under
            confidentiality obligations
          </li>
        </ul>

        <h2>6. Your rights under GDPR</h2>
        <p>
          You have the right to: access your data, correct inaccurate data,
          request erasure (subject to legal retention obligations), restrict or
          object to processing, and data portability. To exercise any right,
          contact [privacy@yourfirm.com]. You also have the right to lodge a
          complaint with the Cyprus Commissioner for Personal Data Protection.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement appropriate technical and organisational measures to
          protect your data against unauthorised access, alteration, disclosure,
          or destruction. Access to case data is restricted to authorised staff
          only.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The current version will
          always be available within CasePilot. Significant changes will be
          communicated to you directly.
        </p>
      </main>
      <Footer />
    </div>
  );
}
