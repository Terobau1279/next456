import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";

import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/navbar/site-header";

const spaceGrotesk = SpaceGrotesk({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className} suppressHydrationWarning>
      <head>
       
        <meta name="theme-color" content="#ffffff" />
      </head>
      <GoogleAnalytics gaId="G-84Z171LN4N" />
 
    </html>
  );
}
