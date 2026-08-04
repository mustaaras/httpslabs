'use client';

import React from 'react';

export function ClientShowcaseCard() {
  return (
    <div className="product-card">
      <div className="product-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <span
            className="badge"
            style={{
              fontSize: '0.675rem',
              padding: '0.25rem 0.65rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              color: 'var(--text-primary)',
            }}
          >
            Client Showcase Build
          </span>
        </div>

        <div className="domainliq-brand-header" style={{ marginBottom: '1.25rem' }}>
          <a
            href="https://letsdreamforever.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="domainliq-brand-link"
            title="Visit letsdreamforever.com"
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <img
              src="/letsdreamforever_logo.png"
              alt="Let's Dream Forever emblem logo"
              style={{
                maxHeight: '72px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
              Let&apos;s Dream <span style={{ fontWeight: 400, opacity: 0.85 }}>FOREVER</span>
            </span>
          </a>
        </div>

        <div className="product-tagline" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
          letsdreamforever.com
        </div>

        <p className="product-desc" style={{ marginTop: '0.75rem', lineHeight: 1.65, fontStyle: 'italic' }}>
          &ldquo;We design the best stages by hand. Each work is unique, crafted with passion and precision. Serving weddings and exhibitions in Izmir and surrounding cities, we turn your dreams into reality. Our creator mindset ensures that every detail involves artistic touch and dedication.&rdquo;
        </p>

        <div className="product-tags" style={{ marginTop: '1.25rem' }}>
          <span className="product-tag">Client Project</span>
          <span className="product-tag">Custom Stage Design</span>
          <span className="product-tag">Full-Stack Web System</span>
          <span className="product-tag">Brand Strategy</span>
        </div>
      </div>

      <div className="product-footer">
        <a
          href="https://letsdreamforever.com/en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-product-visit"
        >
          <span>Visit letsdreamforever.com</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}
