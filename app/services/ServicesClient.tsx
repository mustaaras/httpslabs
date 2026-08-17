'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function ServicesClient() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const remaining = docHeight - (scrollTop + winHeight);

      // Show after scrolling 200px down, hide when near the bottom (within 480px of page bottom)
      if (scrollTop > 200 && remaining > 480) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerContactModal = () => {
    window.dispatchEvent(new CustomEvent('open-contact'));
  };

  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem' }}>
      {/* Hero Section */}
      <div className="services-hero-container">
        <span className="section-kicker">Web &amp; Platform Engineering</span>
        <h1
          style={{
            fontSize: '3.25rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0.5rem 0 1.25rem 0',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: '850px',
          }}
        >
          We build websites and full platforms for founders.
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            margin: '0 0 2.5rem 0',
            maxWidth: '680px',
            lineHeight: 1.6,
          }}
        >
          From simple websites to complete SaaS products with infrastructure included.
        </p>

        {/* Hero CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={triggerContactModal}
            className="contact-btn"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-main)',
              border: '1px solid var(--text-primary)',
              padding: '0.85rem 1.85rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Get a Free Consultation
          </button>
          <a
            href="https://wa.me/19292734008"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              padding: '0.85rem 1.85rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>10+ Years Experience</span>
        </div>
        <div className="trust-bar-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>Domain + SaaS + Payments</span>
        </div>
        <div className="trust-bar-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>100% Code Ownership</span>
        </div>
      </div>

      {/* Pricing Section (3 cards) */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="pricing-grid">
          {/* Card 1: Starter Website */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="pricing-card-best-for">Best For: Personal brands, simple businesses</span>
              <h3>Starter Website</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.25rem 0 1rem 0' }}>
                Modern responsive website, basic pages, contact form, SEO basics, deployment
              </p>
              <div className="pricing-card-price">
                <span className="price-amount">Starting from $1,200</span>
                <p className="price-scope">Custom static presentation or business setup</p>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="deliverables-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Custom design (responsive)</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Up to 5–7 pages</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Contact form</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Basic SEO setup</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Fast deployment</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Mobile optimized</span>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <button
                onClick={triggerContactModal}
                className="pricing-btn-secondary"
              >
                <span>Select Starter</span>
              </button>
            </div>
          </div>

          {/* Card 2: Custom Platform / SaaS */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="pricing-card-best-for">Best For: Founders who need a real product</span>
              <h3>Custom Platform / SaaS</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.25rem 0 1rem 0' }}>
                Full web application, Admin panel, Authentication (Google OAuth), Database, Dedicated VPS hosting deployment, Transactional emails
              </p>
              <div className="pricing-card-price">
                <span className="price-amount">Starting from $5,900</span>
                <p className="price-scope">Lean multi-tenant MVP with admin panel, authentication, and cloud deployment</p>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="deliverables-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Full custom application (Next.js / React)</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Admin panel</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>User auth (including Google OAuth)</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Database setup</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Dedicated VPS hosting deployment</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Custom transactional email setups</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Staging + production environments</span>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <button
                onClick={triggerContactModal}
                className="pricing-btn-primary"
              >
                <span>Deploy Platform</span>
              </button>
            </div>
          </div>

          {/* Card 3: Full Build Package */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="pricing-card-best-for">Best For: Custom specs &amp; serious builds</span>
              <h3>Full Build Package</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.25rem 0 1rem 0' }}>
                Our most flexible tier. Custom features, Stripe payment integration, domain strategy support, transactional emails, and advanced routing configs
              </p>
              <div className="pricing-card-price">
                <span className="price-amount">Custom Quote</span>
                <p className="price-scope">Tailored full-platform execution with advanced specs, custom integrations, &amp; hosting options</p>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="deliverables-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Everything in Tier 2</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Stripe / payment system integration</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Subscription billing (if needed)</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Domain strategy &amp; DNS setup support</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Email routing + transactional setup</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Priority support during development</span>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <button
                onClick={triggerContactModal}
                className="pricing-btn-secondary"
              >
                <span>Request Custom SOW</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Disclosure Note */}
        <p className="pricing-note">
          * Final price depends on the exact features, number of pages/modules, and any third-party services.
          Domain purchase costs and paid external APIs are not included.
        </p>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-kicker">How We Work</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.5rem 0' }}>Our Execution Process</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>A transparent, step-by-step path from first alignment to product deployment.</p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">01</div>
            <h4>Discovery Call</h4>
            <p>We align on your product requirements, target audience, and business objectives.</p>
          </div>
          <div className="process-step">
            <div className="process-number">02</div>
            <h4>Proposal &amp; Scope</h4>
            <p>You receive a transparent statement of work, fixed pricing, and milestone deadlines.</p>
          </div>
          <div className="process-step">
            <div className="process-number">03</div>
            <h4>Development &amp; Setup</h4>
            <p>We design, code, test, and set up infrastructure under active weekly updates.</p>
          </div>
          <div className="process-step">
            <div className="process-number">04</div>
            <h4>Launch + Handover + Support</h4>
            <p>We deploy to production, verify all systems, and hand over source files &amp; credentials with 30 days support.</p>
          </div>
        </div>
      </section>

      {/* Honest Social Proof / Trust Section */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '6rem',
        }}
        className="office-spotlight-grid"
      >
        <div style={{ position: 'relative', height: '420px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <Image
            src="/simple_office_desk.png"
            alt="httpsLabs developer desktop workspace setup"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div>
          <span className="section-kicker">Core Strengths</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.5rem 0 1.25rem 0', lineHeight: 1.2 }}>
            Engineering with Experience &amp; Integrity
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            We do not inflate stats or display generic placeholder testimonials. We rely on clean code, transparent infrastructure setup, and premium digital asset placement.
          </p>

          <div className="trust-pillars-list">
            <div className="trust-pillar-item">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>10+ Years in Domains &amp; Branding</span>
              </h4>
              <p>Navigating secondary digital asset acquisitions, secure escrow coordination, and brand positioning.</p>
            </div>
            <div className="trust-pillar-item">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>Focused on Modern SaaS Infrastructure</span>
              </h4>
              <p>Building high-performance Next.js, React, and TypeScript applications backed by Supabase and PostgreSQL.</p>
            </div>
            <div className="trust-pillar-item">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                <span>Modern &amp; Controlled Infrastructure</span>
              </h4>
              <p>We deploy using efficient, production-ready VPS systems so you keep full ownership of your stack. Enterprise-grade setups available on AWS upon request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-kicker">Built by httpsLabs</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.5rem 0' }}>Active Projects &amp; Builds</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>Proprietary web platforms and client venture systems engineered by httpsLabs LLC.</p>
        </div>

        <div className="grid">
          {/* Project 1 */}
          <div className="showcase-item">
            <div>
              <div className="showcase-header">
                <span className="showcase-title">domainliq.com</span>
                <span className="showcase-tag">Flagship Product</span>
              </div>
              <p className="showcase-desc">
                Our custom in-house domain marketplace platform built to list, scan, and negotiate high-value digital brand assets.
              </p>
            </div>
            <a href="https://domainliq.com" target="_blank" rel="noopener noreferrer" className="showcase-link">
              <span>Visit Platform</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>

          {/* Project 2 */}
          <div className="showcase-item">
            <div>
              <div className="showcase-header">
                <span className="showcase-title">letsdreamforever.com</span>
                <span className="showcase-tag">Client Project</span>
              </div>
              <p className="showcase-desc">
                Full-stack stage presentation and booking engine designed specifically for Izmir's premium wedding &amp; exhibition stage building company.
              </p>
            </div>
            <a href="https://letsdreamforever.com/en" target="_blank" rel="noopener noreferrer" className="showcase-link">
              <span>Visit Build</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
          </div>

          {/* Project 3 */}
          <div className="showcase-item">
            <div>
              <div className="showcase-header">
                <span className="showcase-title">found.gg</span>
                <span className="showcase-tag">Proprietary Venture</span>
              </div>
              <p className="showcase-desc">
                A central discovery platform cataloging micro-SaaS and vibe-coded projects, currently under development.
              </p>
            </div>
            <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              <span>Development In Progress</span>
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '6rem', maxWidth: '850px', margin: '0 auto 6rem auto' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-kicker">Objections &amp; Answers</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0.5rem 0' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Clear answers regarding timelines, licensing, business formation, and support.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
              How long does a typical SaaS project take?
            </h3>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Most custom SaaS platforms are engineered and deployed in 4 to 8 weeks, structured in weekly milestones with staging updates so you can test features as they are built.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
              Do you only work with premium domains or also mid-range names?
            </h3>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              We assist with stealth negotiation and acquisitions for digital brand assets of all levels, ranging from mid-tier brandable .coms to high-value six-figure category-defining domains.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
              What tech stack do you use?
            </h3>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              We mainly use Next.js, TypeScript, PostgreSQL, and deploy on dedicated VPS servers. We can also work with AWS, Vercel, or other cloud providers depending on your needs.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
              Can you help with company formation and banking setups?
            </h3>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              We provide practical guidance on US Delaware/Wyoming LLC setup, corporate structuring, and provide direct partner introductions to business banking options like Mercury and Wise.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
              What happens after the project is delivered?
            </h3>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              All web deployments include 30 days of direct technical support, a complete handover of git repositories, cloud hosting ownership, and database credentials, alongside detailed support documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Conversion Block */}
      <section
        style={{
          marginTop: '6rem',
          padding: '4rem 3rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          boxShadow: 'var(--card-hover-shadow)',
          textAlign: 'center',
        }}
        className="services-contact-section"
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <Image
              src="/welcoming_team.png"
              alt="httpsLabs welcoming team"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <span className="section-kicker" style={{ fontSize: '0.8rem' }}>Start Executing</span>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0.5rem 0 1rem 0',
            lineHeight: 1.2,
          }}
        >
          Ready to build your project?
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6,
          }}
        >
          Tell us about your project and we’ll reply within 24 hours. Let's discuss pricing, scope, and engineering details.
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
          <a
            href="https://wa.me/19292734008"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#25d366',
              color: 'white',
              border: '1px solid #25d366',
              padding: '0.85rem 1.75rem',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={triggerContactModal}
            className="contact-btn email-btn-container"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid var(--border)',
              background: 'var(--bg-main)',
              padding: '0.85rem 1.75rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--text-primary)',
            }}
          >
            <span>Email Office</span>
          </button>
        </div>
      </section>

      {/* Floating Sticky Widget */}
      <div
        className="floating-widget-container"
        style={{
          opacity: showFloating ? 1 : 0,
          visibility: showFloating ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
      >
        <a
          href="https://wa.me/19292734008"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-button floating-whatsapp"
          title="Chat with us on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}
