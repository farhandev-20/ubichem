import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";
import { Toaster } from "@/components/Toast";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#00450d",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: {
    default: "Sanghvi Quality Products",
    template: "%s | Sanghvi Quality Products",
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Sanghvi Quality Products",
    description: siteConfig.seo.description,
    images: [{ url: siteConfig.seo.ogImage }],
    type: "website",
    locale: "en_IN",
    siteName: "Sanghvi Quality Products",
  },
  other: {
    "google-site-verification": "TODO: add verification code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.companyName,
              alternateName: siteConfig.brandName,
              url: "https://ubichem.in",
              foundingDate: "1988",
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.contact.city,
                addressRegion: siteConfig.contact.state,
                addressCountry: siteConfig.contact.country,
              },
              sameAs: [siteConfig.social.facebook],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-[family-name:var(--font-inter)]">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
