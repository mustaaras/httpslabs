import React from 'react';
import type { Metadata } from 'next';
import { HeroVideo } from '@/components/HeroVideo';
import { ProductCard } from '@/components/ProductCard';
import { FoundGGCard } from '@/components/FoundGGCard';
import { ClientShowcaseCard } from '@/components/ClientShowcaseCard';

export const metadata: Metadata = {
  title: 'Websites & Custom Platform Engineering for Founders',
  description: 'We build responsive websites, custom full-stack SaaS platforms, and complete payment/domain infrastructure setups for founders with zero limits.',
};

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <HeroVideo />
        <div className="hero-content-wrapper">
          <div className="hero">
            <div className="badge-group">
              <span className="badge">STARTER WEBSITES</span>
              <span className="badge">CUSTOM PLATFORMS / SAAS</span>
              <span className="badge">FULL INFRASTRUCTURE</span>
            </div>
            <h1>We build websites and custom platforms for founders.</h1>
            <p>
              httpsLabs LLC builds responsive websites, custom full-stack SaaS platforms, and completes payment and domain infrastructure setups for founders with zero technical limits.
            </p>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>

      <main>
        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="section-header">
            <span className="section-kicker">Core Packages</span>
            <h2 className="section-title">Services &amp; Build Packages</h2>
            <p className="section-subtitle">
              From simple websites to complete SaaS products with infrastructure and custom hosting options.
            </p>
          </div>

          <div className="grid">
            {/* Service 1 */}
            <div className="card">
              <div className="card-icon">
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Starter Website</h3>
              <p>
                Modern responsive websites, basic presentation pages, contact forms, and foundational SEO setups.
              </p>
            </div>

            {/* Service 2 */}
            <div className="card">
              <div className="card-icon">
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Custom Platform / SaaS</h3>
              <p>
                Full Next.js/React applications with custom admin dashboards, user authentication, database, and VPS cloud hosting.
              </p>
            </div>

            {/* Service 3 */}
            <div className="card">
              <div className="card-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Full Build Package</h3>
              <p>
                End-to-end platform execution including Stripe payment system, subscription billing, domain routing, and priority support.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="products-section">
          <div className="section-header">
            <span className="section-kicker">Proprietary Ventures</span>
            <h2 className="section-title">Products &amp; Ecosystem</h2>
            <p className="section-subtitle">
              Standalone digital asset trading platforms and SaaS software created and operated by httpsLabs LLC.
            </p>
          </div>

          <div className="product-grid">
            <ProductCard />
            <FoundGGCard />
            <ClientShowcaseCard />
          </div>
        </section>
      </main>
    </>
  );
}
