import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us & Corporate Profile',
  description: 'Learn about httpsLabs LLC — an enterprise digital venture firm operating domain marketplaces, engineering custom full-stack SaaS platforms, and deploying website and payment infrastructures.',
  alternates: {
    canonical: 'https://httpslabs.com/about',
  },
  openGraph: {
    title: 'About Us & Corporate Profile | httpsLabs LLC',
    description: 'Learn about httpsLabs LLC — an enterprise digital venture firm operating domain marketplaces, engineering custom full-stack SaaS platforms, and deploying website and payment infrastructures.',
    url: 'https://httpslabs.com/about',
    siteName: 'httpsLabs LLC',
    type: 'website',
    images: [
      {
        url: '/simple_office_team.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs LLC Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us & Corporate Profile | httpsLabs LLC',
    description: 'Learn about httpsLabs LLC — an enterprise digital venture firm operating domain marketplaces, engineering custom full-stack SaaS platforms, and deploying website and payment infrastructures.',
    site: '@httpsLabsLLC',
    images: ['/simple_office_team.png'],
  },
};

export default function AboutPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem' }}>
      {/* Page Hero Header */}
      <div className="section-header" style={{ marginBottom: '4rem' }}>
        <span className="section-kicker">Corporate Profile &amp; Mission</span>
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0 0 1rem 0',
            lineHeight: 1.15,
          }}
        >
          Architecting Digital Infrastructure
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            margin: 0,
            maxWidth: '820px',
            lineHeight: 1.65,
          }}
        >
          httpsLabs LLC is an enterprise digital venture firm operating proprietary domain marketplaces, engineering custom full-stack SaaS platforms, and deploying complete website and payment infrastructures.
        </p>
      </div>

      {/* Corporate Overview Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: 'var(--card-hover-shadow)',
        }}
        className="office-spotlight-grid"
      >
        <div>
          <span className="section-kicker" style={{ fontSize: '0.7rem' }}>Who We Are</span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>
            A Decade of Domain &amp; Software Leadership
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 1.25rem 0' }}>
            With over 10 years of experience in the domaining and web software industries, httpsLabs LLC combines deep secondary domain market expertise with modern full-stack web engineering. We help founders acquire high-impact digital real estate and build scalable web platforms across all categories.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn-product-visit" style={{ padding: '0.6rem 1.1rem', fontSize: '0.875rem' }}>
              Explore Our Services
            </Link>
            <Link href="/contact" className="nav-link nav-btn-contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.6rem 1.1rem', fontSize: '0.875rem' }}>
              Contact Office
            </Link>
          </div>
        </div>

        <div className="office-spotlight-image-wrapper">
          <Image
            src="/simple_office_team.png"
            alt="httpsLabs engineering studio team"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* Company Core Pillars */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-kicker">Core Operating Principles</span>
          <h2 className="section-title">The httpsLabs Advantage</h2>
          <p className="section-subtitle">
            Built on confidentiality, precision engineering, and strategic digital asset acquisition.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>10+ Years Domain Strategy</h3>
            <p>
              Deep industry relationships and secondary market expertise to secure premium digital real estate and configure correct DNS and routing setups.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>Custom Platform Engineering</h3>
            <p>
              Engineering custom web applications, user authentication (OAuth), databases, and admin dashboards using React, Next.js, and TypeScript.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Modern &amp; Controlled Infrastructure</h3>
            <p>
              We deploy using efficient, production-ready systems (Hetzner + Coolify) so you keep full ownership of your stack. Enterprise-grade setups are available on AWS or Vercel upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Entity Details */}
      <section
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <span className="section-kicker" style={{ fontSize: '0.7rem' }}>Entity Information</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0.4rem 0 0.5rem 0', color: 'var(--text-primary)' }}>
            httpsLabs LLC &bull; Registered US Business Entity
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
            Headquartered at 30 N Gould St, Ste R, Sheridan, WY 82801, United States.
          </p>
        </div>
        <Link href="/contact" className="btn-submit" style={{ width: 'auto', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
          Contact Corporate Office
        </Link>
      </section>
    </main>
  );
}
