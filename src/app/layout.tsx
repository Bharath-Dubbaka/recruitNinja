import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   // title: "RecruitCatch - LinkedIn X-Ray Search Tool",
   title: {
      default: "RecruitCatch - XRay Search Tool",
      template: "%s - RecruitCatch",
   },

   description:
      "X Ray search tool (Made in India) to Search LinkedIn profiles using advanced Boolean strings",
   openGraph: {
      type: "website",
      url: "https://RecruitCatch.com/", // Replace with your actual website URL
      title: "RecruitCatch - Xray search tool for social/public profiles",
      description:
         "X Ray search tool to Search LinkedIn profiles using advanced Boolean strings.",
      siteName: "RecruitCatch",
      images: [
         {
            url: "https://recruitcatch.com//opengraph-image.png", // Replace with your actual OG image URL
            width: 1200,
            height: 630,
            alt: "RecruitCatch - Xray search tool for social/public profiles",
         },
      ],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} min-h-screen flex flex-col`}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
