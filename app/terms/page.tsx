import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service governing the use of httpsLabs LLC platforms, digital asset services, and custom SaaS engineering.',
  alternates: {
    canonical: 'https://httpslabs.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | httpsLabs LLC',
    description: 'Terms of Service governing the use of httpsLabs LLC platforms, digital asset services, and custom SaaS engineering.',
    url: 'https://httpslabs.com/terms',
    siteName: 'httpsLabs LLC',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | httpsLabs LLC',
    description: 'Terms of Service governing httpsLabs LLC web platforms and corporate services.',
    site: '@httpsLabsLLC',
  },
};

export default function TermsPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <span className="section-kicker">Legal &amp; Compliance</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Last Updated: August 4, 2026 &bull; Effective Date: August 4, 2026
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.975rem' }}>
        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>1. Agreement to Terms</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement made between you (&ldquo;User,&rdquo; &ldquo;Client,&rdquo; or &ldquo;you&rdquo;) and httpsLabs LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of the httpslabs.com website, domain brokerage services, proprietary marketplaces, and custom full-stack SaaS engineering services.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>2. Services &amp; Scope of Work</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            httpsLabs LLC provides specialized services for domain buyers and sellers, custom full-stack SaaS platform engineering, brand identity systems, and global corporate setup consulting. All custom engineering deliverables and domain transfer transactions are governed by specific written statements of work (SOW) or escrow transfer agreements.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>3. Intellectual Property Rights</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Unless otherwise indicated, the website, source code, databases, software designs, audio, video, text, photographs, and graphics on httpslabs.com (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (&ldquo;Marks&rdquo;) are owned or controlled by httpsLabs LLC.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>4. Payment Terms &amp; Escrow</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            All domain name purchases, brokerage commissions, and SaaS development milestones are processed securely via verified payment gateways (including Stripe, Escrow.com, and wire transfers). Domain transfers are executed upon full verification and release of funds.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>5. Limitation of Liability</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            To the fullest extent permitted by applicable law, httpsLabs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services or platforms.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>6. Contact &amp; Governance</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States of America. For questions regarding these Terms, please contact our legal team at <Link href="/contact" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>our contact office</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
