import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { FloatingHelpButton } from "@/components/FloatingHelpButton";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StructuredData } from "@/components/SEO/StructuredData";
import { getOrganizationSchema, getSoftwareApplicationSchema } from "@/lib/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://expertinvestment.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Expert Investment - Property Investment Analytics Dashboard",
    template: "%s | Expert Investment",
  },
  description: "Professional property investment analytics platform for tracking ROI, cash flow, portfolio performance, and real estate market trends. Make data-driven investment decisions.",
  keywords: [
    "property investment",
    "real estate analytics",
    "investment portfolio management",
    "ROI calculator",
    "cash flow analysis",
    "property valuation",
    "real estate dashboard",
    "investment tracking",
    "portfolio analytics",
  ],
  authors: [{ name: "Expert Investment" }],
  creator: "Expert Investment",
  publisher: "Expert Investment",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Expert Investment",
    title: "Expert Investment - Property Investment Analytics Dashboard",
    description: "Professional property investment analytics platform for tracking ROI, cash flow, portfolio performance, and real estate market trends.",
    images: [
      {
        url: `${BASE_URL}/og-images/home.png`,
        width: 1200,
        height: 630,
        alt: "Expert Investment Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Investment - Property Investment Analytics Dashboard",
    description: "Professional property investment analytics platform for tracking ROI, cash flow, and portfolio performance.",
    images: [`${BASE_URL}/og-images/home.png`],
    creator: "@expertinvestment",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icon?<generated>',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-icon?<generated>',
    },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#105B48" />
        <StructuredData data={organizationSchema} />
        <StructuredData data={softwareSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <Header />
          {children}
          <FloatingHelpButton />
        </TooltipProvider>
      </body>
    </html>
  );
}
