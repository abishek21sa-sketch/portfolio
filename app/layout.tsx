import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "../components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-abisheksa.vercel.app"),
  title: {
    default: "Abishek SA Kumar — Industrial Engineering · Operations Research · AI",
    template: "%s — Abishek SA Kumar",
  },
  description: "Industrial engineer building optimization, simulation, data, and AI systems for complex operational decisions.",
  alternates: { canonical: "/" },
  applicationName: "Abishek SA Kumar Portfolio",
  authors: [{ name: "Abishek Singanur Aswan Kumar" }],
  creator: "Abishek Singanur Aswan Kumar",
  category: "portfolio",
  keywords: [
    "Industrial Engineering",
    "Operations Research",
    "Optimization",
    "Simulation",
    "Manufacturing",
    "Supply Chain",
    "Decision Systems",
    "Artificial Intelligence",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Abishek SA Kumar — Industrial Engineering · Operations Research · AI",
    description: "Optimization, simulation, data, and AI systems for complex operational decisions.",
    siteName: "Abishek SA Kumar Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Abishek SA Kumar — Industrial Engineering · Operations Research · AI",
    description: "Optimization, simulation, data, and AI systems for complex operational decisions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4f1ea",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
