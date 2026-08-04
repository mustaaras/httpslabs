import React from 'react';
import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { ClientShowcaseCard } from '@/components/ClientShowcaseCard';

export const metadata: Metadata = {
  title: 'Products & Client Showcase',
  description: 'Proprietary digital asset trading platforms, SaaS software, and client venture builds engineered by httpsLabs LLC, including domainliq.com and letsdreamforever.com.',
  alternates: {
    canonical: 'https://httpslabs.com/products',
  },
  openGraph: {
    title: 'Products & Client Showcase | httpsLabs LLC',
    description: 'Explore proprietary platforms and client web builds engineered by httpsLabs LLC, including domainliq.com and letsdreamforever.com.',
    url: 'https://httpslabs.com/products',
    siteName: 'httpsLabs LLC',
    type: 'website',
    images: [
      {
        url: '/domainliq_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs LLC Products & Ventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Client Showcase | httpsLabs LLC',
    description: 'Explore proprietary platforms and client web builds engineered by httpsLabs LLC, including domainliq.com and letsdreamforever.com.',
    site: '@httpsLabsLLC',
    images: ['/domainliq_logo_transparent.png'],
  },
};

export default function ProductsPage() {
  return (
    <main style={{ padding: '7rem 4rem 6rem 4rem' }}>
      <div className="section-header" style={{ marginBottom: '4rem' }}>
        <span className="section-kicker">Portfolio &amp; Client Projects</span>
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            margin: '0 0 1rem 0',
            lineHeight: 1.15,
          }}
        >
          Products &amp; Ecosystem
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            margin: 0,
            maxWidth: '780px',
            lineHeight: 1.6,
          }}
        >
          Proprietary web platforms and client venture systems engineered with zero limits by httpsLabs LLC.
        </p>
      </div>

      <div className="product-grid">
        {/* Flagship Proprietary Product: domainliq.com */}
        <ProductCard />

        {/* Client Venture Build: letsdreamforever.com */}
        <ClientShowcaseCard />
      </div>
    </main>
  );
}
