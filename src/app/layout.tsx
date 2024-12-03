import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "RecruitNinja - LinkedIn X-Ray Search Tool",
   description:
      "Made in India, tool to Search LinkedIn profiles using advanced Boolean search strings",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <Navbar />
         <main>
            <body className={inter.className}>{children}</body>
         </main>
         <Footer />
      </html>
   );
}
