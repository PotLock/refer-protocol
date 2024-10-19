import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REFER PROTOCOL | Build Powerful On-Chain Referrals",
  description: "REFER Protocol empowers ecosystems to create, manage, and incentivize growth through on-chain referral systems. Build powerful on-chain referrals with ease.",
  keywords: "REFER PROTOCOL, on-chain referrals, blockchain, referral system, Web3",
  openGraph: {
    title: "REFER PROTOCOL | Build Powerful On-Chain Referrals",
    description: "Empower your ecosystem with on-chain referral systems using REFER Protocol.",
    type: "website",
    url: "https://referprotocol.com", // Replace with your actual URL
    images: [
      {
        url: "/images/meta.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "REFER PROTOCOL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REFER PROTOCOL | Build Powerful On-Chain Referrals",
    description: "Empower your ecosystem with on-chain referral systems using REFER Protocol.",
    images: ["/images/meta.png"], // Replace with your actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
