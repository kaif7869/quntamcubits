import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://quntamcubits.com";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "QuntamCubits",
  alternateName: ["Quntam Cubits", "QuntamCubits IT Company"],
  url: siteUrl,
  logo: `${siteUrl}/logo/companylogo.png`,
  image: `${siteUrl}/logo/companylogo.png`,
  description:
    "QuntamCubits is an IT company in Belgaum, Karnataka offering website development, mobile app development, custom software, AI chatbots, UI/UX design, and cloud solutions.",
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
  makesOffer: [
    "Website Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI Chatbot Development",
    "UI/UX Design",
    "Cloud Solutions",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "QuntamCubits | IT Company in Belgaum",
    template: "%s | QuntamCubits",
  },
  description:
    "QuntamCubits is an IT company in Belgaum, Karnataka building websites, mobile apps, custom software, AI chatbots, UI/UX design, and cloud solutions.",
  keywords: [
    "QuntamCubits",
    "Quntam Cubits",
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
    siteName: "QuntamCubits",
    title: "QuntamCubits | IT Company in Belgaum",
    description:
      "Website development, mobile app development, custom software, AI chatbots, UI/UX design, and cloud solutions in Belgaum.",
    images: [
      {
        url: "/logo/companylogo.png",
        width: 1254,
        height: 1254,
        alt: "QuntamCubits logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuntamCubits | IT Company in Belgaum",
    description:
      "Modern websites, apps, AI chatbots, software, and cloud solutions by QuntamCubits in Belgaum.",
    images: ["/logo/companylogo.png"],
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
