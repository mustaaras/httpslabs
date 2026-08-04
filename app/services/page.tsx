import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services & Engineering Capabilities',
  description: 'From acquiring high-impact domain names to engineering full-stack SaaS platforms, integrating payment gateways, and establishing international corporate entities.',
  alternates: {
    canonical: 'https://httpslabs.com/services',
  },
  openGraph: {
    title: 'Services & Engineering Capabilities | httpsLabs LLC',
    description: 'From acquiring high-impact domain names to engineering full-stack SaaS platforms, integrating payment gateways, and establishing international corporate entities.',
    url: 'https://httpslabs.com/services',
    siteName: 'httpsLabs LLC',
    type: 'website',
    images: [
      {
        url: '/simple_office_desk.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs Services & Practice Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Engineering Capabilities | httpsLabs LLC',
    description: 'From acquiring high-impact domain names to engineering full-stack SaaS platforms, integrating payment gateways, and establishing international corporate entities.',
    site: '@httpsLabsLLC',
    images: ['/simple_office_desk.png'],
  },
};

export default function ServicesPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem' }}>
      {/* Page Hero Header */}
      <div className="section-header" style={{ marginBottom: '4rem' }}>
        <span className="section-kicker">Specialized Practice Areas</span>
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0 0 1rem 0',
            lineHeight: 1.15,
          }}
        >
          Services &amp; Capabilities
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
          End-to-end services for domain buyers, sellers, and founders — from personal websites to full-stack SaaS engineering, payment gateway integration, and international business setup.
        </p>
      </div>

      {/* Office Team Spotlight Section */}
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
        <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <Image
            src="/simple_office_team.png"
            alt="httpsLabs team working in modern office"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div>
          <span className="section-kicker" style={{ fontSize: '0.7rem' }}>Inside httpsLabs</span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>
            10+ Years of Industry Experience &amp; Execution
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 1.25rem 0' }}>
            With over 10 years of specialized experience in the domaining, web development, and branding industries, we know exactly how to guide our clients to the right digital assets and technical architecture.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="product-tag">Domain Strategy</span>
            <span className="product-tag">Full-Stack SaaS</span>
            <span className="product-tag">Payment Gateways</span>
            <span className="product-tag">Global Entity Setup</span>
          </div>
        </div>
      </div>

      {/* Practice Area 1: Domain Acquisition & Branding */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-kicker">01 / Domain &amp; Brand Acquisition</span>
          <h2 className="section-title">Domain Strategy &amp; Naming Expertise</h2>
          <p className="section-subtitle">
            We help users secure the absolute best domain name for their specific business model.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>Domain Sourcing &amp; Acquisition</h3>
            <p>
              Over 10 years of experience navigating the secondary domain market to source, negotiate, and acquire premium .com names tailored to your industry.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Brand Identity &amp; Positioning</h3>
            <p>
              Designing memorable brand names, digital assets, and high-converting identities that build immediate trust with buyers and investors.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
            </div>
            <h3>High-Converting Landing Pages</h3>
            <p>
              Engineering custom, high-converting landing pages tailored for domain monetization, product waitlists, and corporate lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Area 2: Full-Stack Engineering */}
      <section style={{ marginBottom: '4.5rem' }}>
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-kicker">02 / Software Development</span>
          <h2 className="section-title">Personal Websites to Full-Stack SaaS</h2>
          <p className="section-subtitle">
            Custom software engineering tailored to your requirements with zero technical limitations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '2.5rem',
          }}
          className="office-spotlight-grid"
        >
          <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>Zero-Limit Custom Engineering</h3>
            <p style={{ fontSize: '1.025rem', lineHeight: 1.65 }}>
              Whether you need a sleek personal portfolio website, a high-speed marketing page, or an enterprise multi-tenant SaaS platform, our engineering team builds custom web applications across all categories with zero limits.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <Image
              src="/simple_office_desk.png"
              alt="httpsLabs engineering workspace desk setup"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Practice Area 3: Payment Gateways & Global Business Setup */}
      <section style={{ marginBottom: '3rem' }}>
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-kicker">03 / Financial &amp; Entity Infrastructure</span>
          <h2 className="section-title">Payment Gateways &amp; Global Setup</h2>
          <p className="section-subtitle">
            Experienced setup for selling products globally and establishing international business operations.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <h3>Payment Gateway Integration</h3>
            <p>
              Configuring resilient payment systems for selling digital products, subscriptions, and high-value domains via Stripe, Escrow, Crypto, and multi-currency gateways.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <h3>Global Business Entity Setup</h3>
            <p>
              Hands-on experience helping clients establish corporate business structures, entities, and international setups across different countries efficiently.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
