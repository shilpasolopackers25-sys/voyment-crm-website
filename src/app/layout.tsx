import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voyager Intelligent Travel CRM | #1 CRM for Travel Agencies",
  description: "Transform your travel business with Voyager CRM. Manage leads, track agent productivity, generate invoices, and grow your travel agency efficiently.",
  keywords: "travel CRM, travel agency software, lead management, travel business, CRM for travel agents",
  openGraph: {
    title: "Voyager Intelligent Travel CRM",
    description: "The intelligent CRM built specifically for travel agencies. Manage leads, boost productivity, and grow your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
