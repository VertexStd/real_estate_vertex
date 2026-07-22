import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://aureliusrealty.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aurelius Realty | Luxury Real Estate",
    template: "%s | Aurelius Realty",
  },
  description:
    "Aurelius Realty curates architecturally significant estates, penthouses, and waterfront residences for discerning clients. Private advisory since 1991.",
  applicationName: "Aurelius Realty",
  keywords: [
    "luxury real estate",
    "private estates",
    "penthouses",
    "Dubai luxury homes",
    "Palm Jumeirah",
    "Beverly Hills estates",
    "waterfront residences",
  ],
  authors: [{ name: "Aurelius Realty", url: SITE_URL }],
  creator: "Aurelius Realty",
  publisher: "Aurelius Realty",
  category: "real estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aurelius Realty",
    title: "Aurelius Realty | Where Vision Meets Address",
    description:
      "Private estates and architectural residences, quietly curated for a discerning few.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Aurelius Realty — luxury estate overlooking the ocean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelius Realty | Luxury Real Estate",
    description:
      "Private estates and architectural residences, quietly curated since 1991.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=630&fit=crop&q=80",
    ],
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
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#161513" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Aurelius Realty",
  description:
    "Luxury real estate agency curating architecturally significant estates and penthouses for discerning clients.",
  url: SITE_URL,
  telephone: "+1-310-555-0192",
  email: "concierge@aureliusrealty.com",
  image:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=630&fit=crop&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9665 Wilshire Blvd",
    addressLocality: "Beverly Hills",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0672,
    longitude: -118.4013,
  },
  foundingDate: "1991",
  priceRange: "$$$$",
  areaServed: ["Dubai", "Beverly Hills", "Malibu", "Miami Beach", "Manhattan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
