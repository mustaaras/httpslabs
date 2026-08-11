import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { ProtectedEmail } from './ProtectedEmail';

export const metadata: Metadata = {
  title: 'Contact & Corporate Inquiry',
  description: 'Direct contact communication channel to httpsLabs LLC office. Get in touch for custom website builds, full-stack SaaS engineering, or platform inquiries.',
  alternates: {
    canonical: 'https://httpslabs.com/contact',
  },
  openGraph: {
    title: 'Contact & Corporate Inquiry | httpsLabs LLC',
    description: 'Reach out to httpsLabs LLC directly for custom website builds, full-stack SaaS engineering, or platform inquiries.',
    url: 'https://httpslabs.com/contact',
    siteName: 'httpsLabs LLC',
    type: 'website',
    images: [
      {
        url: '/domainliq_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs LLC Contact Office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Corporate Inquiry | httpsLabs LLC',
    description: 'Reach out to httpsLabs LLC directly for custom website builds, full-stack SaaS engineering, or platform inquiries.',
    site: '@httpsLabsLLC',
    images: ['/domainliq_logo_transparent.png'],
  },
};

export default function ContactPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem' }}>
      {/* Page Hero Header */}
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-kicker">Direct Communication Line</span>
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0 0 1rem 0',
            lineHeight: 1.15,
          }}
        >
          Contact Office
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            margin: 0,
            maxWidth: '780px',
            lineHeight: 1.6,
          }}
        >
          Have a project in mind, need custom website builds, or want to discuss full-stack platform engineering? Reach out directly to httpsLabs LLC.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
        className="office-spotlight-grid"
      >
        {/* Contact Form Card */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '2.75rem',
            boxShadow: 'var(--card-hover-shadow)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
            Send Corporate Inquiry
          </h2>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: '0 0 2rem 0' }}>
            Fill out the form below and a senior team member will respond within 24 hours.
          </p>
          <ContactForm />
        </div>

        {/* Office & Direct Contact Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Office Address Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2.25rem',
            }}
          >
            <div className="section-kicker" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Corporate Office</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>
              httpsLabs LLC
            </h3>
            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px', stroke: 'var(--text-primary)' }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>
                30 N Gould St, Ste R<br />
                Sheridan, WY 82801<br />
                United States of America
              </span>
            </div>
          </div>

          {/* Direct Phone & WhatsApp Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2.25rem',
            }}
          >
            <div className="section-kicker" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>Direct Communication Channels</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ProtectedEmail />

              <a
                href="tel:+16105579277"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+1 (610) 557-9277</span>
              </a>

              <a
                href="https://wa.me/16105579277"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Business</span>
              </a>

              <a
                href="https://x.com/httpsLabsLLC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow httpsLabs on X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
