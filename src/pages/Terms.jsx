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
          These Terms of Service ("Terms") govern your access to and use of
          CasePilot, a case management platform operated by [Your Full Name]
          ("we", "us", or "our"). By creating an account, you agree to these
          Terms.
        </p>

        <hr />

        <h2>1. The service</h2>
        <p>
          CasePilot is a SaaS platform that allows legal professionals to manage
          client cases, track case stages, and share status updates with clients
          via secure tracking links. We provide the platform as a tool only — we
          do not provide legal advice, and we are not a party to any
          relationship between you and your clients.
        </p>

        <h2>2. Your account</h2>
        <p>
          You must provide accurate information when signing up. You are
          responsible for maintaining the security of your account credentials
          and for all activity that occurs under your account. Notify us
          immediately at [your@email.com] if you suspect unauthorised access.
        </p>

        <h2>3. Your responsibilities as a data controller</h2>
        <p>By using CasePilot to store client data, you acknowledge that:</p>
        <ul>
          <li>
            You are the <strong>data controller</strong> for all client personal
            data you enter into the platform
          </li>
          <li>
            You are responsible for ensuring you have a lawful basis to process
            your clients' data
          </li>
          <li>
            You are responsible for complying with GDPR and any other applicable
            data protection law in your jurisdiction
          </li>
          <li>
            You must have your own Privacy Policy in place for your clients
          </li>
        </ul>
        <p>
          We act as your <strong>data processor</strong> in respect of client
          data. Our Data Processing Agreement, available at [link or "on
          request"], governs this relationship and must be accepted before using
          the platform with real client data.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use CasePilot for any unlawful purpose</li>
          <li>
            Enter data into the platform without a lawful basis to process it
          </li>
          <li>Attempt to access other users' accounts or data</li>
          <li>
            Reverse engineer, copy, or redistribute any part of the platform
          </li>
          <li>Introduce malicious code or attempt to disrupt the service</li>
        </ul>

        <h2>5. Platform availability</h2>
        <p>
          We aim to keep CasePilot available at all times but do not guarantee
          uninterrupted access. We are not liable for losses arising from
          downtime or third-party infrastructure failures (including those of
          Supabase or other providers).
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          CasePilot, including its design, code, and branding, is the property
          of [Your Full Name]. Your firm name, logo, and content you upload
          remain your own. You grant us a limited licence to display your
          branding within the platform solely for the purpose of delivering the
          service (e.g. showing your logo in client-facing emails).
        </p>

        <h2>7. Payment and cancellation</h2>
        <p>
          [Add your pricing and cancellation terms here when you have them. For
          example: subscription terms, refund policy, what happens to data on
          cancellation.]
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any
          indirect, incidental, or consequential losses arising from your use of
          CasePilot. Our total liability to you shall not exceed the amount you
          paid us in the 3 months preceding the claim. Nothing in these terms
          excludes liability for fraud or gross negligence.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of the Republic of Cyprus. Any
          disputes shall be subject to the exclusive jurisdiction of the courts
          of Cyprus.
        </p>

        <h2>10. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of
          material changes by email or via the platform. Continued use after
          changes take effect constitutes acceptance.
        </p>

        <h2>11. Contact</h2>
        <p>
          For any questions about these Terms, contact [your@email.com].
        </p>
      </main>
      <Footer />
    </div>
  );
}
