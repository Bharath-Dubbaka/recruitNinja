import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-slate-700 text-white py-8">
         <div className="mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Brand Section */}
            <div className="text-center sm:text-left">
               <h3 className="text-xl font-bold">RecruitCatch</h3>
               <p className="text-gray-400 text-sm mt-2">
                  Empowering recruiters/recruitment with advanced Xray search
                  capabilities.
               </p>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4 ">
               <Link href="/" className="text-sm hover:text-gray-300">
                  Home
               </Link>
               <Link href="/contact" className="text-sm hover:text-gray-300">
                  Contact
               </Link>
               <Link href="/privacy" className="text-sm hover:text-gray-300">
                  Privacy
               </Link>
               <Link href="/tos" className="text-sm hover:text-gray-300">
                  ToS
               </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-row space-x-4">
               <a
                  href="https://www.linkedin.com/company/recruitcatch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
               >
                  <Linkedin className="w-6 h-6" />
               </a>
               <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
               >
                  <Twitter className="w-6 h-6" />
               </a>
            </div>
         </div>

         {/* Footer Bottom Section */}
         <div className="text-center border-t border-slate-600 mt-6 pt-4">
            <p className="text-sm text-gray-400">
               © {new Date().getFullYear()} RecruitCatch. All rights reserved.
            </p>
         </div>
      </footer>
   );
}
