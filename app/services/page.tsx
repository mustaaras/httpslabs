import React from 'react';
import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Websites & Full-Stack Platform Engineering',
  description: 'We build modern responsive websites, custom SaaS platforms, and enterprise web applications with complete payment and domain infrastructure setup for founders.',
  alternates: {
    canonical: 'https://httpslabs.com/services',
  },
  openGraph: {
    title: 'Websites & Full-Stack Platform Engineering | httpsLabs LLC',
    description: 'We build modern responsive websites, custom SaaS platforms, and enterprise web applications with complete payment and domain infrastructure setup for founders.',
    url: 'https://httpslabs.com/services',
    siteName: 'httpsLabs LLC',
    type: 'website',
    images: [
      {
        url: '/domainliq_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs Services & Practice Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites & Full-Stack Platform Engineering | httpsLabs LLC',
    description: 'We build modern responsive websites, custom SaaS platforms, and enterprise web applications with complete payment and domain infrastructure setup for founders.',
    site: '@httpsLabsLLC',
    images: ['/domainliq_logo_transparent.png'],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
