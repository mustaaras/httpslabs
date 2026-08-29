'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="httpsLabs LLC">
              <svg
                className="logo-icon"
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="logo-grad-footer"
                    x1="0"
                    y1="0"
                    x2="36"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="var(--logo-grad-start)" />
                    <stop offset="100%" stopColor="var(--logo-grad-end)" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="32"
                  height="32"
                  rx="9"
                  fill="url(#logo-grad-footer)"
                  stroke="var(--logo-stroke)"
                  strokeWidth="1.5"
                />
                <path d="M10 11L15 8V28L10 25V11Z" fill="var(--text-primary)" />
                <path d="M26 11L21 8V28L26 25V11Z" fill="var(--text-primary)" />
                <path d="M15 16.5H21V19.5H15V16.5Z" fill="var(--text-primary)" />
              </svg>
              <div>
                https<span>Labs</span>
              </div>
            </Link>
            <p className="brand-desc">
              Enterprise digital venture firm specializing in domain name buying &amp; selling, full-stack SaaS engineering, and brand strategy.
            </p>

          </div>

          {/* Products Column */}
          <div className="footer-col">
            <div className="footer-heading">Products</div>
            <ul className="footer-links footer-products-list">
              <li>
                <a
                  href="https://domainliq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-product-link"
                >
                  <span>domainliq.com</span>
                  <svg
                    className="footer-product-arrow"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://found.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-product-link"
                >
                  <span>found.gg</span>
                  <svg
                    className="footer-product-arrow"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              <li>
                <Link href="/services">Domain Brokerage</Link>
              </li>
              <li>
                <Link href="/services">Full-Stack SaaS</Link>
              </li>
              <li>
                <Link href="/services">Brand Strategy</Link>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div className="footer-col">
            <div className="footer-heading">Office</div>
            <div className="contact-card">
              <div className="contact-row">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  30 N Gould St, Ste R<br />
                  Sheridan, WY 82801, USA
                </span>
              </div>
            </div>
          </div>

          {/* Direct Inquiries & Contact */}
          <div className="footer-col">
            <div className="footer-heading">Contact</div>
            <div className="contact-card">
              <Link
                href="/contact"
                className="contact-row link-row"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Send Direct Inquiry</span>
              </Link>
              <a href="tel:+16105579277" className="contact-row link-row">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (610) 557-9277 (Tel)</span>
              </a>
              <a href="tel:+13073574942" className="contact-row link-row">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect width="12" height="8" x="6" y="14" />
                </svg>
                <span>+1 (307) 357-4942 (Fax)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span>&copy; 2026 httpsLabs LLC. All rights reserved.</span>
            <span style={{ opacity: 0.3 }}>&bull;</span>
            <Link href="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <span style={{ opacity: 0.3 }}>&bull;</span>
            <Link href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </div>
          <div className="footer-social-links">
            {/* WhatsApp (First) */}
            <a
              href="https://wa.me/16105579277"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-link"
              aria-label="httpsLabs WhatsApp"
              title="httpsLabs on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
            {/* X (Second) */}
            <a
              href="https://x.com/httpsLabsLLC"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-link"
              aria-label="httpsLabs X Page"
              title="httpsLabs on X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn (Third) */}
            <a
              href="https://www.linkedin.com/company/httpslabs"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-link"
              aria-label="httpsLabs LinkedIn Company Page"
              title="httpsLabs on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
