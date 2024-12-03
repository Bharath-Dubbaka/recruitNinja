import React from "react";
import Link from "next/link";

const Privacy = () => {
   return (
      <div className="bg-white text-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-8">
         <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-8">
               <h1 className="text-3xl font-bold text-slate-800 mb-4">
                  Privacy Policy
               </h1>
            </div>

            <div className="space-y-6">
               <section className="bg-slate-50 p-4 rounded-md">
                  <p className="text-slate-800">
                     Our Website, [Your Website Name] ("we," "our," or "us"),
                     integrates with the Google Custom Search to facilitate
                     the discovery of publicly available professional profiles.
                  </p>

                  <p className="mt-4 text-slate-700">
                     When users perform a search on our Website, their search
                     queries may be transmitted to and processed by the Google
                     Custom Search API. Please note that while we do not
                     directly collect or store these search queries, Google may
                     collect information as per its own privacy policies.
                  </p>

                  <p className="mt-4 text-slate-700">
                     For more information on how Google collects, uses, and
                     protects data, please refer to{" "}
                     <a
                        href="https://policies.google.com/privacy"
                        className="text-blue-600 hover:underline"
                     >
                        Google's Privacy Policy
                     </a>
                     .
                  </p>

                  <p className="mt-4 text-slate-700">
                     By using our search functionality, you agree to the
                     processing of your search queries via the Google Custom
                     Search.
                  </p>
               </section>

               <section className="bg-slate-50 p-4 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     1. Information We Collect
                  </h2>
                  <p className="text-slate-700">
                     We do not directly collect or store any personal
                     information from external websites. Our service uses the
                     Google Custom Search API to retrieve publicly available
                     information.
                  </p>

                  <div className="mt-4 space-y-2">
                     <h3 className="text-xl font-medium text-slate-800">
                        Automatically Collected Information
                     </h3>
                     <ul className="list-disc list-inside text-slate-700">
                        <li>IP Address</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Referring/exit pages and URLs</li>
                        <li>Date and time of your visits</li>
                     </ul>
                     <p className="text-slate-700">
                        This data is collected via cookies, Google Analytics, or
                        similar technologies.
                     </p>
                  </div>
               </section>

               <section className="bg-slate-50 p-4 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     2. Usage Disclaimer
                  </h2>
                  <p className="text-slate-700">
                     We use the Google Custom Search API to:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                           Retrieve publicly available professional information
                        </li>
                        <li>
                           Facilitate search functionality for legitimate
                           professional networking purposes
                        </li>
                        <li>
                           Provide real-time search results from publicly
                           indexed sources
                        </li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-4 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     3. Data Handling
                  </h2>
                  <p className="text-slate-700">
                     We do not:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Store personal profile data on our servers</li>
                        <li>Extract private or hidden information</li>
                        <li>Violate terms of service of any platform</li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-4 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     4. Compliance and Opt-Out
                  </h2>
                  <p className="text-slate-700">
                     If you wish to be excluded from search results or have
                     concerns about your publicly available information, please{" "}
                     <Link
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                     >
                        Contact Us
                     </Link>
                     .
                  </p>
               </section>

               <div className="mt-8 text-sm text-slate-600 italic">
                  <p>
                     Disclaimer: This Privacy Policy is provided for
                     informational purposes only and should not be considered
                     legal advice.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Privacy;
