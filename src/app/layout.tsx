import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ghostsop.com"),
  title: "GhostSOP | Lead Handling System Install for Service Businesses",
  description:
    "GhostSOP installs the intake and response system that captures every lead, sends an instant reply, and guides them toward booking automatically.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GhostSOP | Lead Handling System Install for Service Businesses",
    description:
      "The front desk system for businesses without a front desk. GhostSOP fixes lead handling, not lead generation.",
    url: "/",
    siteName: "GhostSOP",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GhostSOP lead handling system landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostSOP | Lead Handling System Install for Service Businesses",
    description:
      "GhostSOP installs the intake and response system that captures every lead, sends an instant reply, and guides them toward booking automatically.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
