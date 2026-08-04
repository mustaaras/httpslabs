import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ClientLayout } from './ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://httpslabs.com'),
  title: {
    default: 'httpsLabs LLC | Enterprise Digital Venture Firm',
    template: '%s | httpsLabs LLC',
  },
  description: 'Enterprise digital venture firm specializing in domain name buying & selling, full-stack SaaS engineering, and brand strategy.',
  keywords: [
    'httpsLabs',
    'httpsLabs LLC',
    'Domain Brokerage',
    'Domain Acquisition',
    'Full-Stack SaaS',
    'SaaS Engineering',
    'Brand Strategy',
    'Domain Liquidation',
    'Web Application Development',
  ],
  authors: [{ name: 'httpsLabs LLC', url: 'https://httpslabs.com' }],
  creator: 'httpsLabs LLC',
  publisher: 'httpsLabs LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=4' },
      { url: '/logo.svg?v=4', type: 'image/svg+xml' },
      { url: '/logo_icon_dark.png?v=4', sizes: '32x32', type: 'image/png' },
      { url: '/logo_icon_dark.png?v=4', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo_icon_dark.png?v=4', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest?v=4',
  openGraph: {
    title: 'httpsLabs LLC | Enterprise Digital Venture Firm',
    description: 'Enterprise digital venture firm specializing in domain name buying & selling, full-stack SaaS engineering, and brand strategy.',
    url: 'https://httpslabs.com',
    siteName: 'httpsLabs LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/domainliq_logo_transparent.png',
        width: 1200,
        height: 630,
        alt: 'httpsLabs LLC Corporate Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'httpsLabs LLC | Enterprise Digital Venture Firm',
    description: 'Enterprise digital venture firm specializing in domain name buying & selling, full-stack SaaS engineering, and brand strategy.',
    site: '@httpsLabsLLC',
    creator: '@httpsLabsLLC',
    images: ['/domainliq_logo_transparent.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', saved);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
