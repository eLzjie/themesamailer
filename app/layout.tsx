import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import { MARKET, BRAND } from "@/lib/market";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${BRAND.name} — ${MARKET.city} ${MARKET.zip}`;
const description = `${MARKET.homes} homes. 12 local businesses. One shared postcard, mailed to every home in ${MARKET.city}, ${MARKET.state}. One category per business — no competitors on the card.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description: `One postcard. ${MARKET.homes} homes. 12 businesses. One per category.`,
    siteName: BRAND.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17100B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
