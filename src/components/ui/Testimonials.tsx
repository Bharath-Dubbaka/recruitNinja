"use client"
import React from "react";

const Testimonials = () => {
   return (
      <div>
         <section className="py-8">
            <h2 className="text-center text-2xl font-bold">
               What Our Users Say
            </h2>
            <div className="flex flex-wrap mt-6 justify-center gap-6">
               <div className="w-full sm:w-1/3 p-4 bg-slate-100 shadow-md">
                  <p className="italic text-slate-600">
                     "RecruitCatch has revolutionized how I search for
                     candidates on LinkedIn!"
                  </p>
                  <p className="mt-4 text-slate-800 font-semibold text-right">
                     - John Doe, Recruiter
                  </p>
               </div>
               <div className="w-full sm:w-1/3 p-4 bg-slate-100 shadow-md">
                  <p className="italic text-slate-600">
                     "A simple yet powerful tool for recruiters. Highly
                     recommended!"
                  </p>
                  <p className="mt-4 text-slate-800 font-semibold text-right">
                     - Jane Smith, Talent Acquisition
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Testimonials;
