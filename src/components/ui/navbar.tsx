import React from "react";
import Link from "next/link";
import { Search, Home, FishSymbol } from "lucide-react";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-700 text-white  shadow-md">
         <div className="w-full mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
               <FishSymbol className="w-8 h-8 text-white" />
               <span className="text-md md:text-xl font-bold">
                  RecruitCatch
               </span>
            </Link>

            <div className="flex items-center space-x-4">
               <Link
                  href="/"
                  className="flex items-center space-x-1 hover:bg-slate-800 px-3 py-2 rounded-md"
               >
                  <Home className="w-5 h-5" />
                  <span className="text-xs md:text-base">Home</span>
               </Link>
               <Link
                  href="/privacy"
                  className="flex items-center space-x-1 hover:bg-slate-800 px-3 py-2 rounded-md"
               >
                  {/* <Search className="w-5 h-5" /> */}
                  <span className="text-xs md:text-base">Privacy</span>
               </Link>
               <Link
                  href="/contact"
                  className="flex items-center space-x-1 hover:bg-slate-800 px-3 py-2 rounded-md"
               >
                  {/* <Settings className="w-5 h-5 text-slate-700" /> */}
                  <span className="text-xs md:text-base">Contact</span>
               </Link>
            </div>
         </div>
      </nav>
   );
}
