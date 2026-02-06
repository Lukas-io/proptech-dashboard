import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://proptech-dashboard-flax.vercel.app';

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-images/home.png',
}: PageMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Expert Investment`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'property investment',
      'real estate analytics',
      'portfolio management',
      'ROI tracking',
      'investment dashboard',
      ...keywords,
    ],
    authors: [{ name: 'Expert Investment' }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Expert Investment',
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} - Expert Investment Dashboard Preview`,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}${ogImage}`],
      creator: '@expertinvestment',
    },
    alternates: {
      canonical: url,
    },
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
  };
}
