import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Analytics from "./Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   // title: "RecruitCatch - LinkedIn X-Ray Search Tool",
   title: {
      default: "RecruitCatch - FREE XRay Search Tool for Linkedin and more",
      template: "%s - RecruitCatch",
   },
   description:
      "RecruitCatch, a FREE XRay search tool Made in India, designed to simplify Boolean searches. Save time and enhance your recruitment process with this easy-to-use tool to find relevant profiles efficiently and efficiently.",

   openGraph: {
      type: "website",
      url: "https://RecruitCatch.com/", // Replace with your actual website URL
      title: "RecruitCatch - FREE XRay Search Tool for Linkedin and more",
      description:
         "RecruitCatch, a FREE XRay search tool Made in India, designed to simplify Boolean searches. Save time and enhance your recruitment process with this easy-to-use tool to find relevant profiles efficiently and efficiently.",
      siteName: "RecruitCatch",
      images: [
         {
            url: "https://recruitcatch.com//opengraph-image.png", // Replace with your actual OG image URL
            width: 1200,
            height: 630,
            alt: "RecruitCatch - FREE XRay Search Tool for Linkedin and more",
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
            <Analytics />

            <Footer />
         </body>
      </html>
   );
}
