"use client";
import React from "react";

const Featuers = () => {
   return (
      <div>
         <section className="mt-8 mb-4 py-8 bg-slate-100 rounded-lg">
            <h2 className="text-center text-2xl font-bold">Key Features</h2>
            <div className="flex flex-wrap mt-6 justify-center gap-6">
               <div className="w-full sm:w-1/3 text-center p-4 bg-white shadow-md">
                  <h3 className="font-semibold text-lg">
                     Easy Boolean Searches
                  </h3>
                  <p className="text-slate-600 mt-2">
                     Simplify LinkedIn searches with our Boolean Xray Search
                     Tool. Perform efficient Xray searches on Google to find
                     LinkedIn profiles with ease.
                  </p>
               </div>
               <div className="w-full sm:w-1/3 text-center p-4 bg-white shadow-md">
                  <h3 className="font-semibold text-lg">Free to Use</h3>
                  <p className="text-slate-600 mt-2">
                     No subscription or hidden costs. Start using RecruitCatch,
                     the best LinkedIn Xray Search Tool, immediately.
                  </p>
               </div>
               <div className="w-full sm:w-1/3 text-center p-4 bg-white shadow-md">
                  <h3 className="font-semibold text-lg">Fast and Reliable</h3>
                  <p className="text-slate-600 mt-2">
                     Save time with quick and accurate results. Whether you are
                     exploring LinkedIn Xray search techniques or performing
                     efficient Xray search for recruitment.
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Featuers;
