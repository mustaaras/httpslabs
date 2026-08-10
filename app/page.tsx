import React from 'react';
import { HeroVideo } from '@/components/HeroVideo';
import { ProductCard } from '@/components/ProductCard';
import { FoundGGCard } from '@/components/FoundGGCard';
import { ClientShowcaseCard } from '@/components/ClientShowcaseCard';

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <HeroVideo />
        <div className="hero-content-wrapper">
          <div className="hero">
            <div className="badge-group">
              <span className="badge">DOMAIN BROKERAGE</span>
              <span className="badge">FULL-STACK SAAS</span>
              <span className="badge">BRAND STRATEGY</span>
            </div>
            <h1>Specialized Services for Domain Buyers, Sellers &amp; SaaS Founders.</h1>
            <p>
              httpsLabs LLC provides end-to-end services for domain buyers and sellers, engineers custom full-stack SaaS platforms across all categories with zero limits, and builds high-converting brand identities.
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
            <span className="section-kicker">Core Capabilities</span>
            <h2 className="section-title">Services &amp; Practice Areas</h2>
            <p className="section-subtitle">
              End-to-end expertise in acquiring premium digital real estate, engineering web platforms, and establishing corporate identities.
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
              <h3>Domain Brokerage &amp; Acquisition</h3>
              <p>
                Strategic domain acquisition, valuation, portfolio liquidation, and stealth negotiations for high-value digital real estate.
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
              <h3>Full-Stack SaaS Engineering</h3>
              <p>
                Building resilient web applications, cloud architecture, and marketplace engines tailored for high scalability and throughput.
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
              <h3>Brand Strategy &amp; Identity</h3>
              <p>
                Creating cohesive corporate brand systems, modern design languages, and digital presence for emerging tech ventures.
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
