import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy explaining how httpsLabs LLC collects, protects, and handles personal data and corporate inquiry information.',
  alternates: {
    canonical: 'https://httpslabs.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | httpsLabs LLC',
    description: 'Privacy Policy explaining how httpsLabs LLC collects, protects, and handles personal data and corporate inquiry information.',
    url: 'https://httpslabs.com/privacy',
    siteName: 'httpsLabs LLC',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | httpsLabs LLC',
    description: 'Privacy Policy governing data protection at httpsLabs LLC.',
    site: '@httpsLabsLLC',
  },
};

export default function PrivacyPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <span className="section-kicker">Data Protection &amp; Confidentiality</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Last Updated: August 4, 2026 &bull; Effective Date: August 4, 2026
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.975rem' }}>
        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>1. Overview</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            httpsLabs LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal data of our website visitors, domain buyers, sellers, and corporate clients. This Privacy Policy outlines how we collect, use, store, and safeguard your information.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>2. Information We Collect</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We collect information that you voluntarily provide to us when submitting corporate inquiries, requesting domain acquisition valuations, or engaging our engineering services. This includes:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
            <li>Contact details (Full Name, Work Email Address, Phone Number).</li>
            <li>Corporate inquiry details and domain negotiation requirements.</li>
            <li>Technical usage data (IP address, browser type, device metadata for security and bot protection).</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>3. How We Use Your Information</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We process your information strictly for legitimate business purposes, including:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
            <li>Responding to corporate inquiries and scope requests.</li>
            <li>Facilitating domain escrow transfers and client software deliverables.</li>
            <li>Preventing fraudulent inquiries and ensuring platform security.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>4. Data Confidentiality &amp; Non-Disclosure</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We do not sell, rent, or trade your personal or corporate data to third parties. All domain buyer and seller acquisition negotiations are conducted under strict corporate confidentiality and non-disclosure standards.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>5. Security Measures</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We implement administrative, technical, and physical security controls to safeguard your personal data. All communication channels and form submissions are encrypted via TLS/SSL.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>6. Contact Information</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            If you have any questions or requests regarding your personal data or this Privacy Policy, please reach out to our privacy officer at <Link href="/contact" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>our contact office</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
