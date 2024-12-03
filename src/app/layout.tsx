import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "RecruitNinja - LinkedIn X-Ray Search Tool",
   description:
      "Made in India, X Ray search tool to Search LinkedIn profiles using advanced Boolean strings",
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
