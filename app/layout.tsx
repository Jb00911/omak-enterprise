import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Omak Enterprise Inc. | Digital Growth Agency – New York",
    template: "%s | Omak Enterprise Inc.",
  },
  description:
    "Omak Enterprise Inc. is a New York-based digital growth agency specializing in SEO, web development, AI automation, CRM integration, and custom dashboards. We help businesses scale with intelligent digital solutions.",
  keywords: [
    "SEO agency New York",
    "web development agency",
    "AI automation",
    "CRM integration",
    "custom dashboard development",
    "digital growth agency",
    "Omak Enterprise",
  ],
  authors: [{ name: "Omak Enterprise Inc." }],
  creator: "Omak Enterprise Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omakenterprise.com",
    siteName: "Omak Enterprise Inc.",
    title: "Omak Enterprise Inc. | Digital Growth Agency – New York",
    description:
      "We build the digital infrastructure that grows your business — SEO, web development, AI automation, CRM, and custom dashboards.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omak Enterprise Inc. | Digital Growth Agency",
    description:
      "New York's premier digital growth agency. SEO, AI automation, web development & more.",
  },
  metadataBase: new URL("https://omakenterprise.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://omakenterprise.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
