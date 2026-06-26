import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./Legal.module.css";

export default function Terms() {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <h1>Terms of Service</h1>
        <p className={styles.meta}>Last updated: [Date] · Effective: [Date]</p>

        <p>
          These Terms of Service govern your use of CasePilot, operated by [Your
          Law Firm Name]. By accessing the platform, you agree to these terms.
        </p>

        <hr />

        <h2>1. Who may use CasePilot</h2>
        <p>
          CasePilot is a private platform. Access is granted only to authorised
          lawyers and staff of [Your Law Firm Name], and to clients who have been
          issued a case tracking link. Unauthorised access or sharing of login
          credentials is prohibited.
        </p>

        <h2>2. The service</h2>
        <p>
          CasePilot provides a case management interface allowing lawyers to
          create and update client cases, and clients to view the status of their
          matter via a secure tracking link. The platform does not constitute
          legal advice. All advice is provided separately through your engagement
          with the firm.
        </p>

        <h2>3. Client tracking links</h2>
        <p>
          Each client receives a unique tracking link to view their case status.
          This link should be kept confidential. [Your Law Firm Name] is not
          responsible for unauthorised access resulting from a client sharing
          their tracking link with others.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Attempt to access cases or data you are not authorised to view</li>
          <li>Use the platform for any unlawful purpose</li>
          <li>Introduce malicious code or attempt to disrupt the service</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>

        <h2>5. Data and confidentiality</h2>
        <p>
          Case data stored in CasePilot is confidential and subject to legal
          professional privilege where applicable. All staff with access to the
          platform are bound by professional and contractual confidentiality
          obligations. Our handling of personal data is described in our Privacy
          Policy.
        </p>

        <h2>6. Availability and liability</h2>
        <p>
          We aim to keep CasePilot available at all times but cannot guarantee
          uninterrupted access. We are not liable for losses arising from
          platform downtime, data loss due to third-party infrastructure failure,
          or use of the platform contrary to these terms. Nothing in these terms
          limits liability for fraud, gross negligence, or any liability that
          cannot be excluded by law.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          CasePilot and all associated software, design, and content are the
          property of [Your Law Firm Name]. You may not copy, modify, or
          redistribute any part of the platform without prior written consent.
        </p>

        <h2>8. Governing law</h2>
        <p>
          These terms are governed by the laws of the Republic of Cyprus. Any
          disputes shall be subject to the exclusive jurisdiction of the courts
          of Cyprus.
        </p>

        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Continued use of CasePilot
          after changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any questions about these terms, contact us at [legal@yourfirm.com].
        </p>
      </main>
      <Footer />
    </div>
  );
}
