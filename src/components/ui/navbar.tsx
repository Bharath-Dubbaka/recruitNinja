import React from "react";
import Link from "next/link";
import { Search, Home, Settings } from "lucide-react";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
         <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
               <Search className="w-8 h-8 text-slate-800" />
               <span className="text-xl font-bold text-slate-800">
                  RecruitNinja
               </span>
            </Link>

            <div className="flex items-center space-x-4">
               <Link
                  href="/"
                  className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-md"
               >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
               </Link>
               <Link
                  href="/privacy"
                  className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-md"
               >
                  <Search className="w-5 h-5" />
                  <span>Privacy</span>
               </Link>
               <Link href="/tos" className="hover:bg-gray-100 p-2 rounded-full">
                  <Settings className="w-5 h-5 text-slate-700" />
               </Link>
            </div>
         </div>
      </nav>
   );
}
