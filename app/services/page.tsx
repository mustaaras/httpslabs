import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ProtectedEmail } from '../contact/ProtectedEmail';


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
        <div className="office-spotlight-image-wrapper">
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

          <div className="office-spotlight-image-wrapper">
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

      {/* Direct Contact Action Section */}
      <section
        style={{
          marginTop: '6rem',
          padding: '3.5rem 2.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          boxShadow: 'var(--card-hover-shadow)',
          textAlign: 'center',
        }}
        className="services-contact-section"
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Image
              src="/welcoming_team.png"
              alt="httpsLabs welcoming team"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <span className="section-kicker" style={{ fontSize: '0.75rem' }}>Let's Build Together</span>
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0.5rem 0 1rem 0',
            lineHeight: 1.2,
          }}
        >
          Have a Project or Inquiry?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6,
          }}
        >
          Reach out directly to the httpsLabs LLC office. Whether you need a premium domain name, custom full-stack SaaS engineering, or global payment setups, we are here to execute.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
          className="services-contact-links"
        >
          {/* WhatsApp - Primary Action */}
          <a
            href="https://wa.me/16105579277"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--text-primary)',
              color: 'var(--bg-card)',
              border: '1px solid var(--text-primary)',
              padding: '0.85rem 1.75rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              boxShadow: 'var(--card-hover-shadow)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp Business</span>
          </a>

          {/* Protected Email */}
          <div
            className="contact-btn email-btn-container"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              background: 'var(--bg-main)',
              padding: '0.8rem 1.75rem',
              borderRadius: '12px',
              transition: 'background 0.2s ease, transform 0.2s ease',
              cursor: 'pointer',
            }}
          >
            <ProtectedEmail label="Contact Email" />
          </div>

          {/* Phone */}
          <a
            href="tel:+16105579277"
            className="contact-btn phone-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-main)',
              color: 'var(--text-primary)',
              padding: '0.85rem 1.75rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+1 (610) 557-9277</span>
          </a>
        </div>
      </section>
    </main>
  );
}
