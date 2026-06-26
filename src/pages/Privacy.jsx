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
          This Privacy Policy explains how CasePilot ("we", "us", or "our"),
          operated by [Your Full Name], collects and uses personal data about
          the lawyers and legal professionals ("users") who sign up to use our
          platform. It does not cover client data entered by users into the
          platform — that data is controlled exclusively by the user.
        </p>

        <hr />

        <h2>1. Who we are</h2>
        <p>
          CasePilot is operated by [Your Full Name], contactable at
          [your@email.com]. We are the data controller only in respect of the
          account data described below.
        </p>

        <h2>2. What data we collect about you (the lawyer)</h2>
        <p>When you sign up and use CasePilot, we collect:</p>
        <ul>
          <li>Your name and email address</li>
          <li>Your law firm or practice name and logo (if provided)</li>
          <li>
            Billing information, processed by our payment provider [e.g. Stripe]
          </li>
          <li>Usage data such as login timestamps and feature activity</li>
        </ul>
        <p>
          We do <strong>not</strong> have access to, or control over, any client
          data you enter into the platform.
        </p>

        <h2>3. What we do not control</h2>
        <p>
          CasePilot is a tool for legal professionals to manage their own client
          cases. Any personal data you enter about your clients — including
          names, email addresses, and case details — is stored in your account
          on Supabase and is under your sole control as the data controller. We
          act only as a data processor in respect of that data, as set out in
          our Data Processing Agreement.
        </p>

        <h2>4. Why we collect your data and our lawful basis</h2>
        <p>We process your account data to:</p>
        <ul>
          <li>Create and manage your CasePilot account</li>
          <li>Provide and improve the platform</li>
          <li>
            Send you service-related communications (e.g. billing receipts,
            updates)
          </li>
        </ul>
        <p>
          Our lawful basis is <strong>performance of a contract</strong>{" "}
          (providing you the service you signed up for) and{" "}
          <strong>legitimate interests</strong> (maintaining and improving the
          platform).
        </p>

        <h2>5. Who we share your data with</h2>
        <p>
          We use the following third-party providers who may process your
          account data on our behalf:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — database and infrastructure hosting
          </li>
          <li>
            <strong>[Stripe or your payment provider]</strong> — payment
            processing
          </li>
          <li>
            <strong>[Any email provider, e.g. Resend / SendGrid]</strong> —
            transactional email delivery
          </li>
        </ul>
        <p>Each provider is bound by appropriate data processing terms.</p>

        <h2>6. How long we keep your data</h2>
        <p>
          We retain your account data for as long as your account is active, and
          for up to [e.g. 2 years] after account closure for legitimate business
          purposes such as billing records. You may request deletion at any time.
        </p>

        <h2>7. Your rights</h2>
        <p>
          You have the right to access, correct, or delete your account data,
          restrict or object to processing, and data portability. To exercise
          any right, contact [your@email.com].
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of
          significant changes by email or via the platform.
        </p>
      </main>
      <Footer />
    </div>
  );
}
