import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-slate-900 text-white py-8 mt-16">
         <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div>
               <h3 className="text-xl font-bold">RecruitNinja</h3>
               <p className="text-gray-400 text-sm mt-2">
                  Empowering recruiters with advanced LinkedIn search
                  capabilities.
               </p>
            </div>

            <div className="flex items-center space-x-4">
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

            <div className="flex space-x-4">
               <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
               >
                  <Github className="w-6 h-6" />
               </a>
               <a
                  href="https://linkedin.com/company/your-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
               >
                  <Linkedin className="w-6 h-6" />
               </a>
            </div>
         </div>

         <div className="text-center border-t border-slate-700 mt-6 pt-4">
            <p className="text-sm text-gray-400">
               © {new Date().getFullYear()} RecruitNinja. All rights reserved.
            </p>
         </div>
      </footer>
   );
}
