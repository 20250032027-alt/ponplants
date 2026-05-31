import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for PonPlants. Covers data collection, Google AdSense, cookies, and your rights.',
  robots: { index: true, follow: false },
}

const LAST_UPDATED = 'May 30, 2025'
const SITE = 'PonPlants'
const DOMAIN = 'ponplants.com'
const EMAIL = 'contact@ponplants.com'
const ADSENSE_ID = 'ca-pub-7492388540350253'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 className="serif" style={{ fontSize: '1.3rem', color: 'var(--text-1)', marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-2)' }}>{children}</div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 14 }}>{children}</p>
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, marginBottom: 14, listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
          <svg style={{ flexShrink: 0, marginTop: 6 }} width="6" height="6" viewBox="0 0 6 6">
            <circle cx="3" cy="3" r="3" fill="var(--accent)" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <span className="eyebrow">Legal</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-4)' }}>Last updated: {LAST_UPDATED}</p>
      </div>

      <div style={{ maxWidth: 720 }}>
        <Section title="Overview">
          <P>
            This privacy policy explains how {SITE} ({DOMAIN}) collects, uses, and protects information when you visit this website. By using the site, you agree to the practices described here. If you do not agree, please do not use the site.
          </P>
          <P>
            {SITE} is an informational resource for semi-hydro plant growers. We do not sell your personal information to any third party.
          </P>
        </Section>

        <Section title="Information we collect">
          <P>
            We collect two categories of information: information you give us directly, and information collected automatically when you visit the site.
          </P>
          <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: 8 }}>Information you provide directly</p>
          <UL items={[
            'Contact form submissions: your name, email address, and message content. This is submitted via Formspree and used only to respond to your message.',
          ]} />
          <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: 8 }}>Information collected automatically</p>
          <UL items={[
            'Usage data: pages visited, time spent, referral source, browser type, and device type. Collected via Google Analytics.',
            'Advertising data: Google AdSense uses cookies and similar technologies to serve personalized advertisements based on your browsing activity across sites.',
            'IP address: your approximate location may be inferred from your IP address by third-party analytics and advertising services.',
          ]} />
        </Section>

        <Section title="Google AdSense and advertising">
          <P>
            {SITE} uses Google AdSense (Publisher ID: {ADSENSE_ID}) to display advertisements. Google AdSense is operated by Google LLC and uses cookies to serve ads based on your prior visits to this site and other sites on the internet.
          </P>
          <P>
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to {DOMAIN} and other sites. You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Google Ads Settings
            </a>.
          </P>
          <P>
            For more information about how Google uses data when you visit sites that use Google products, visit{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              How Google uses information from sites or apps that use our services
            </a>.
          </P>
        </Section>

        <Section title="Cookies">
          <P>
            This site uses cookies (small text files stored in your browser) for the following purposes:
          </P>
          <UL items={[
            'Theme preference: a cookie stores whether you have selected light or dark mode.',
            'Analytics: Google Analytics sets cookies to distinguish visitors and track sessions.',
            'Advertising: Google AdSense sets cookies to show relevant advertisements and measure ad performance.',
          ]} />
          <P>
            You can control or disable cookies through your browser settings. Disabling cookies may affect the functionality of this site. Most browsers also support opt-out mechanisms for third-party tracking cookies.
          </P>
        </Section>

        <Section title="Google Analytics">
          <P>
            We use Google Analytics to understand how visitors use the site: which pages are visited, how long visitors stay, and how they arrive. Google Analytics collects data anonymously and reports website trends without identifying individual visitors.
          </P>
          <P>
            You can opt out of Google Analytics by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Google Analytics Opt-out Browser Add-on
            </a>.
          </P>
        </Section>

        <Section title="Formspree (contact form)">
          <P>
            Contact form submissions are processed by Formspree, Inc. When you submit a message through the contact page, your name, email address, and message are transmitted to Formspree's servers and then forwarded to us. Formspree's privacy policy is available at{' '}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              formspree.io/legal/privacy-policy
            </a>.
          </P>
          <P>
            We do not store contact form submissions beyond what is needed to respond to your message. We do not use your contact information for marketing.
          </P>
        </Section>

        <Section title="Third-party links">
          <P>
            The site includes links to third-party websites, including YouTube videos and external plant care resources. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
          </P>
        </Section>

        <Section title="Children's privacy">
          <P>
            This site is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has submitted personal information through this site, please contact us and we will delete it promptly.
          </P>
        </Section>

        <Section title="Your rights">
          <P>Depending on your location, you may have the right to:</P>
          <UL items={[
            'Request access to the personal information we hold about you.',
            'Request correction of inaccurate personal information.',
            'Request deletion of your personal information.',
            'Object to or restrict processing of your personal information.',
            'Opt out of personalized advertising through Google Ads Settings.',
          ]} />
          <P>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>{EMAIL}</a>.
          </P>
        </Section>

        <Section title="Changes to this policy">
          <P>
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes are posted constitutes acceptance of the updated policy.
          </P>
        </Section>

        <Section title="Contact">
          <P>
            Questions about this privacy policy or our data practices can be sent to{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>{EMAIL}</a>{' '}
            or through the{' '}
            <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>contact page</a>.
          </P>
        </Section>
      </div>
    </div>
  )
}
