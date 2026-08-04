'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenContact: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const openDrawer = () => setMobileOpen(true);
  const closeDrawer = () => setMobileOpen(false);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header>
        <Link href="/" className="logo" aria-label="httpsLabs LLC" onClick={closeDrawer}>
          <svg
            className="logo-icon"
            width="40"
            height="40"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="logo-grad-header"
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
              fill="url(#logo-grad-header)"
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

        {/* Desktop Header Actions */}
        <div className="header-right desktop-only-nav">
          <nav className="nav-links">
            <Link
              href="/about"
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`nav-link ${pathname === '/products' ? 'active' : ''}`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={openDrawer}
          aria-label="Open side menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </header>

      {/* Right Side Mobile Menu Drawer & Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${mobileOpen ? 'active' : ''}`}
        onClick={closeDrawer}
      >
        <div
          className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-title">
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="logo-grad-drawer"
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
                  fill="url(#logo-grad-drawer)"
                  stroke="var(--logo-stroke)"
                  strokeWidth="1.5"
                />
                <path d="M10 11L15 8V28L10 25V11Z" fill="var(--text-primary)" />
                <path d="M26 11L21 8V28L26 25V11Z" fill="var(--text-primary)" />
                <path d="M15 16.5H21V19.5H15V16.5Z" fill="var(--text-primary)" />
              </svg>
              <span>https<span>Labs</span></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ThemeToggle />
              <button
                className="drawer-close-btn"
                onClick={closeDrawer}
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Drawer Links */}
          <div className="drawer-body">
            <div className="drawer-nav">
              <Link
                href="/about"
                className={`drawer-link ${pathname === '/about' ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                <span>About Us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link
                href="/services"
                className={`drawer-link ${pathname === '/services' ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                <span>Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link
                href="/products"
                className={`drawer-link ${pathname === '/products' ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                <span>Products &amp; Ecosystem</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link
                href="/contact"
                className={`drawer-link ${pathname === '/contact' ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                <span>Contact Office</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
