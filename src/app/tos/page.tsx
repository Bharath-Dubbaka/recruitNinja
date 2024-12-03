import React from "react";
import Link from "next/link";

const TermsOfService = () => {
   return (
      <div className="bg-white text-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-8">
         <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-slate-800 mb-8 border-b pb-4">
               Terms of Service
            </h1>

            <div className="space-y-8">
               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     1. Introduction
                  </h2>
                  <p className="text-slate-700">
                     Welcome to RecruitNinja.com ("we," "our," "us"). These
                     Terms of Service govern your use of our professional search
                     tool designed to help recruiters and hiring managers find
                     publicly available LinkedIn profiles using Google's Custom
                     Search.
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     2. Service Description
                  </h2>
                  <p className="text-slate-700">
                     RecruitNinja provides a search tool that retrieves publicly
                     available professional profiles using Google's Custom
                     Search. Our service is intended to assist recruiters and
                     hiring managers in finding professional information through
                     legal and ethical means.
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     3. User Responsibilities and Restrictions
                  </h2>
                  <ul className="list-disc list-inside text-slate-700 space-y-2">
                     <li>
                        Users must use RecruitNinja for legitimate professional
                        networking purposes
                     </li>
                     <li>Strictly prohibited activities include:</li>
                     <ul className="list-disc list-inside ml-6">
                        <li>Data scraping</li>
                        <li>Unlawful activities</li>
                        <li>Using automated tools to misuse the platform</li>
                     </ul>
                     <li>
                        Users must comply with all applicable laws and
                        regulations
                     </li>
                     <li>
                        Respect the privacy and professional integrity of
                        individuals
                     </li>
                  </ul>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     4. Intellectual Property
                  </h2>
                  <p className="text-slate-700">
                     All content, design, and functionality of RecruitNinja.com
                     are exclusively owned by us. Users are granted a limited,
                     non-exclusive license to use the service.
                     <br />
                     <br />
                     Users are NOT permitted to:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Link to or share search results</li>
                        <li>Reproduce or redistribute website content</li>
                        <li>Create derivative works based on our service</li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     5. Third-Party Services and Affiliations
                  </h2>
                  <p className="text-slate-700">
                     Important Disclaimers:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>We are NOT affiliated with LinkedIn</li>
                        <li>We are NOT affiliated with Google</li>
                        <li>
                           We use Google Custom Search API to retrieve publicly
                           available profiles
                        </li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     6. Limitation of Liability
                  </h2>
                  <p className="text-slate-700">
                     RecruitNinja provides its service "as is" without any
                     warranties. We are not responsible for:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Accuracy of publicly available information</li>
                        <li>Any damages resulting from service use</li>
                        <li>Decisions made based on search results</li>
                        <li>Changes in third-party platform availability</li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     7. Data Collection and Privacy
                  </h2>
                  <p className="text-slate-700">
                     Data Usage Policy:
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>We do not collect or store personal information</li>
                        <li>
                           Google Custom Search API retrieves publicly available
                           information
                        </li>
                        <li>Automatically collected information includes:</li>
                        <ul className="list-disc list-inside ml-6">
                           <li>IP Address</li>
                           <li>Browser type and version</li>
                           <li>Device information</li>
                           <li>Referring/exit pages and URLs</li>
                           <li>Date and time of visits</li>
                        </ul>
                        <li>
                           Data collected via cookies, Google Analytics, or
                           similar technologies
                        </li>
                     </ul>
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     8. Changes to Terms
                  </h2>
                  <p className="text-slate-700">
                     We reserve the right to modify these Terms of Service at
                     any time. Continued use of the service after changes
                     constitutes acceptance of new terms.
                  </p>
               </section>

               <section className="bg-slate-50 p-6 rounded-md">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                     9. Contact Information
                  </h2>
                  <p className="text-slate-700">
                     For questions or concerns, please{" "}
                     <Link
                        href="/contact"
                        className="text-blue-600 hover:underline"
                     >
                        contact us
                     </Link>
                     .
                  </p>
               </section>

               <div className="mt-8 text-sm text-slate-600 italic text-center">
                  {/* <p>Last Updated: {new Date().toLocaleDateString()}</p> */}
                  <p>© 2024 RecruitNinja. All Rights Reserved.</p>
               </div>
            </div>

            <div className="mt-8 text-center">
               <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
               >
                  Contact Us
               </Link>
            </div>
         </div>
      </div>
   );
};

export default TermsOfService;
