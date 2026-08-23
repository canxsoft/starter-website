import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/data";
import { Google_Sans, Google_Sans_Flex } from "next/font/google";


const googleSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital queue software",
    "virtual queue app",
    "queue management system",
    "event queue software",
    "waitlist app for business",
    "QR code queue",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: site.description,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "99",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" className={`${googleSansFlex.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
