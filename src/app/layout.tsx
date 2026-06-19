import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Analytics from "./Analytics";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://recruitcatch.netlify.app"),
  title: {
    default:
      "RecruitCatch — Free X-Ray Search Tool for LinkedIn & Boolean Search",
    template: "%s | RecruitCatch",
  },
  description:
    "RecruitCatch is a free X-Ray search tool made in India. Simplify Boolean searches, find LinkedIn profiles faster, and enhance your recruitment process in seconds.",
  keywords: [
    "x-ray search tool",
    "linkedin x-ray search",
    "boolean search tool",
    "free recruiter tool",
    "linkedin profile search",
    "recruitment search tool",
    "sourcing tool",
    "boolean string generator",
  ],
  verification: {
    google: "ItCcUb8icysKoLcesP3kce0bVs2CeAvboIlzZLHjHO4",
  },
  alternates: {
    canonical: "https://recruitcatch.netlify.app",
  },
  openGraph: {
    type: "website",
    url: "https://recruitcatch.netlify.app/",
    title:
      "RecruitCatch — Free X-Ray Search Tool for LinkedIn & Boolean Search",
    description:
      "Simplify Boolean searches and find LinkedIn profiles faster. Free X-Ray search tool made in India for recruiters and sourcers.",
    siteName: "RecruitCatch",
    images: [
      {
        url: "/opengraph-image.png", // metadataBase handles the full URL
        width: 1200,
        height: 630,
        alt: "RecruitCatch — Free X-Ray Search Tool for LinkedIn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecruitCatch — Free X-Ray Search Tool for LinkedIn",
    description:
      "Simplify Boolean searches and find LinkedIn profiles faster. Free tool for recruiters.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3419750124614833"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
