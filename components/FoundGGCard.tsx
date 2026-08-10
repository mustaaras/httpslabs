'use client';

import React from 'react';

export function FoundGGCard() {
  return (
    <div className="product-card">
      <div className="product-body">
        <div className="domainliq-brand-header" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a
            href="https://found.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="domainliq-brand-link"
            title="Visit found.gg"
          >
            {/* Dark Theme Logo */}
            <img
              src="/foundgg_logo_transparent.svg?v=1"
              alt="found.gg logo"
              className="foundgg-exact-logo-img logo-dark-theme"
            />
            {/* Light Theme Logo */}
            <img
              src="/foundgg_logo_light_transparent.svg?v=1"
              alt="found.gg logo"
              className="foundgg-exact-logo-img logo-light-theme"
            />
          </a>
          <span
            className="badge badge-warning"
            style={{
              fontSize: '0.675rem',
              padding: '0.25rem 0.65rem',
            }}
          >
            Under Construction
          </span>
        </div>
        <div className="product-tagline">
          The Central Discovery Hub for Vibe-Coded &amp; Micro-SaaS Projects
        </div>
        <p className="product-desc">
          A platform engineered to showcase, discover, and launch vibe-coded software, micro-SaaS products, and innovative developer tools.
        </p>
        <div className="product-tags">
          <span className="product-tag">Vibe-Coded Projects</span>
          <span className="product-tag">Micro-SaaS Hub</span>
          <span className="product-tag">Product Discovery</span>
          <span className="product-tag">SaaS Ecosystem</span>
        </div>
      </div>
      <div className="product-footer">
        <a
          href="https://found.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-product-visit"
        >
          <span>Visit found.gg</span>
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
