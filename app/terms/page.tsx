import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for PonPlants. Covers acceptable use, disclaimers, intellectual property, and limitations of liability.',
  robots: { index: true, follow: false },
}

const LAST_UPDATED = 'May 30, 2025'
const SITE = 'PonPlants'
const DOMAIN = 'ponplants.com'
const EMAIL = 'contact@ponplants.com'

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

export default function TermsPage() {
  return (
    <div className="page-wrap" style={{ paddingBottom: 96 }}>
      <div className="page-header">
        <span className="eyebrow">Legal</span>
        <h1 className="serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: 'var(--text-1)', marginBottom: 12 }}>
          Terms of Use
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-4)' }}>Last updated: {LAST_UPDATED}</p>
      </div>

      <div style={{ maxWidth: 720 }}>
        <Section title="Agreement to terms">
          <P>
            By accessing or using {SITE} ({DOMAIN}), you agree to be bound by these terms of use. If you do not agree with any part of these terms, do not use the site.
          </P>
          <P>
            These terms apply to all visitors, users, and others who access or use the site. We reserve the right to update these terms at any time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
          </P>
        </Section>

        <Section title="Nature of the content">
          <P>
            {SITE} provides informational content about semi-hydro plant growing, specifically covering LECA (Lightweight Expanded Clay Aggregate) and Lechuza Pon substrates. All content is provided for general educational and informational purposes only.
          </P>
          <P>
            The information on this site is derived from analysis of community posts and comments from plant growing communities. While we make reasonable efforts to ensure accuracy, we cannot guarantee that all information is current, complete, or error-free. Plant care outcomes vary significantly depending on individual plant health, environmental conditions, water quality, and other factors outside our control.
          </P>
        </Section>

        <Section title="Disclaimer of warranties">
          <P>
            The site and all its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. {SITE} expressly disclaims all warranties, including but not limited to:
          </P>
          <UL items={[
            'Merchantability or fitness for a particular purpose',
            'Accuracy, completeness, or reliability of any content',
            'That the site will be uninterrupted, error-free, or free of viruses or other harmful components',
            'That results obtained from using the site or following its recommendations will be accurate or reliable',
          ]} />
          <P>
            Following any advice on this site does not guarantee plant health, survival, or growth outcomes. You assume full responsibility for decisions made based on information found here.
          </P>
        </Section>

        <Section title="Limitation of liability">
          <P>
            To the fullest extent permitted by applicable law, {SITE} and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the site or its content. This includes but is not limited to:
          </P>
          <UL items={[
            'Plant death, damage, or deterioration resulting from following advice on this site',
            'Loss of time, money, or effort spent on plant care based on site recommendations',
            'Any errors or omissions in content',
            'Unauthorized access to or alteration of your data',
          ]} />
          <P>
            In jurisdictions that do not allow exclusion of certain warranties or limitation of liability, our liability is limited to the fullest extent permitted by law.
          </P>
        </Section>

        <Section title="Informational purposes only">
          <P>
            Nothing on this site constitutes professional horticultural, agricultural, or scientific advice. The interactive tools on this site, including the reservoir calculator and root rot checker, provide estimates based on general community data. Results are approximate and should be treated as a starting point, not a definitive prescription.
          </P>
          <P>
            Always observe your own plants and adjust care based on what you actually see. No tool or guide can substitute for direct observation of your specific plant in your specific environment.
          </P>
        </Section>

        <Section title="Third-party content and links">
          <P>
            The site includes links to and embeds of third-party content, including YouTube videos. This content is provided for convenience and does not constitute an endorsement of the creators, their other content, or any products or services they may promote.
          </P>
          <P>
            {SITE} is not responsible for the accuracy, legality, or content of any external sites or third-party material linked from this site. Use of third-party sites is governed by their own terms and privacy policies.
          </P>
          <P>
            {SITE} is not affiliated with, sponsored by, or in any commercial relationship with Lechuza, any fertilizer brand, any plant retailer, or any YouTube channel whose content appears on this site. Product and brand mentions are based solely on community usage reports.
          </P>
        </Section>

        <Section title="Advertising">
          <P>
            This site displays advertisements served by Google AdSense. {SITE} does not control the specific ads displayed and is not responsible for the content, accuracy, or claims made in those advertisements. Clicking on advertisements may take you to third-party websites governed by their own terms and policies.
          </P>
          <P>
            The presence of an advertisement on this site does not constitute an endorsement of the advertised product or service.
          </P>
        </Section>

        <Section title="Intellectual property">
          <P>
            All original content on this site, including text, layout, design, and tools, is the property of {SITE} and is protected by applicable copyright and intellectual property laws.
          </P>
          <P>
            You may not reproduce, distribute, modify, or create derivative works from any content on this site without express written permission. Brief quotations for commentary, criticism, or educational purposes with attribution are permitted under fair use principles.
          </P>
          <P>
            Community-sourced information referenced on this site is used in accordance with fair use principles. Where specific grower experiences are described, they reflect general patterns from community data rather than verbatim reproduction of any individual's post.
          </P>
        </Section>

        <Section title="Acceptable use">
          <P>You agree not to use the site to:</P>
          <UL items={[
            'Scrape or harvest data from the site in bulk without permission',
            'Attempt to gain unauthorized access to any part of the site or its infrastructure',
            'Transmit spam, malware, or any harmful code through the contact form',
            'Use the site in any way that violates applicable local, national, or international law',
            'Misrepresent your identity or affiliation when contacting us through the site',
          ]} />
        </Section>

        <Section title="User-submitted content">
          <P>
            When you submit a message through our contact form, you represent that your message is truthful, that you have the right to submit it, and that it does not infringe on any third-party rights.
          </P>
          <P>
            We reserve the right to use feedback, suggestions, or corrections you submit to improve the site. We will not publish your name or contact information without your permission.
          </P>
        </Section>

        <Section title="Governing law">
          <P>
            These terms are governed by and construed in accordance with applicable law. Any disputes arising from the use of this site will be subject to the exclusive jurisdiction of the relevant courts in the applicable jurisdiction.
          </P>
        </Section>

        <Section title="Changes to these terms">
          <P>
            We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Your continued use of the site after changes are posted constitutes acceptance of those changes. If you disagree with the updated terms, you should stop using the site.
          </P>
        </Section>

        <Section title="Contact">
          <P>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              {EMAIL}
            </a>{' '}
            or through the{' '}
            <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              contact page
            </a>.
          </P>
        </Section>
      </div>
    </div>
  )
}
