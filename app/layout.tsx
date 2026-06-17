import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://quntamcubits.com";
const siteName = "Quntam Cubits";
const compactSiteName = "QuntamCubits";
const logoUrl = `${siteUrl}/logo/companylogo1.png`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: siteName,
  alternateName: [compactSiteName, "Quntam Cubits IT Company", "QuntamCubits IT Company"],
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  description:
    "Quntam Cubits is an IT company in Belgaum, Karnataka offering website development, mobile app development, custom software, AI chatbots, UI/UX design, and cloud solutions.",
  email: "quntamcubits@protonmail.com",
  telephone: "+91 6362196902",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belgaum",
    alternateName: "Belagavi",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: ["Belgaum", "Belagavi", "Karnataka", "India"],
  sameAs: [
    "https://www.linkedin.com/in/mohammad-kaif-devalapur-948929222",
  ],
  knowsAbout: [
    "Website Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI Chatbot Development",
    "UI/UX Design",
    "Cloud Solutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Quntam Cubits software services",
    itemListElement: [
      "Website Development",
      "Mobile App Development",
      "Custom Software Development",
      "AI Chatbot Development",
      "UI/UX Design",
      "Cloud Solutions",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Software development",
  classification: "IT company, software development, web development, mobile app development",
  title: {
    default: "Quntam Cubits Tech Solutions",
    template: "%s | Quntam Cubits",
  },
  description:
    "Quntam Cubits is an IT company in Belgaum, Karnataka building websites, mobile apps, custom software, AI chatbots, UI/UX design, and cloud solutions.",
  keywords: [
    "Quntam Cubits",
    "QuntamCubits",
    "Quntam Cubits company",
    "QuntamCubits company",
    "IT company in Belgaum",
    "software company in Belgaum",
    "website development in Belgaum",
    "mobile app development Belgaum",
    "AI chatbot development Belgaum",
    "Belagavi IT company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: "Quntam Cubits Tech Solutions",
    description:
      "Quntam Cubits provides website development, mobile app development, custom software, AI chatbots, UI/UX design, and cloud solutions in Belgaum.",
    images: [
      {
        url: logoUrl,
        width: 1254,
        height: 1254,
        alt: "Quntam Cubits logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quntam Cubits Tech Solutions",
    description:
      "Modern websites, apps, AI chatbots, software, and cloud solutions by Quntam Cubits in Belgaum.",
    images: [logoUrl],
  },
  verification: {
    google: "googlea3419983a5ab9ed6.html",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
