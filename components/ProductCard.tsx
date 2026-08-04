'use client';

import React from 'react';

export function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-body">
        <div className="domainliq-brand-header">
          <a
            href="https://domainliq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="domainliq-brand-link"
            title="Visit domainliq.com"
          >
            {/* Dark Theme Logo */}
            <img
              src="/domainliq_logo_transparent.png?v=5"
              alt="domainliq logo"
              className="domainliq-exact-logo-img logo-dark-theme"
            />
            {/* Light Theme Logo */}
            <img
              src="/domainliq_logo_light_transparent.png?v=5"
              alt="domainliq logo"
              className="domainliq-exact-logo-img logo-light-theme"
            />
          </a>
        </div>
        <div className="product-tagline">
          Premium Domain Liquidation Marketplace
        </div>
        <p className="product-desc">
          A platform for buying &amp; selling premium domains for liquidation prices.
        </p>
        <div className="product-tags">
          <span className="product-tag">Domain Marketplace</span>
          <span className="product-tag">Liquidation Prices</span>
          <span className="product-tag">Premium Assets</span>
          <span className="product-tag">Escrow Transfer</span>
        </div>
      </div>
      <div className="product-footer">
        <a
          href="https://domainliq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-product-visit"
        >
          <span>Visit domainliq.com</span>
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
