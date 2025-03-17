"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchPageBasic() {
   const [jobTitle, setJobTitle] = useState("");
   const [location, setLocation] = useState("");
   const [company, setCompany] = useState("");
   const [skills, setSkills] = useState("");
   const [customQuery, setCustomQuery] = useState("");

   const baseXrayQuery =
      "site:(linkedin.com/in/ OR linkedin.com/pub/) -intitle:profiles -inurl:dir/";

   const generateFormSearchString = () => {
      let query = baseXrayQuery;
      if (jobTitle) query += ` +"${jobTitle}"`;
      if (location) query += ` +"${location}"`;
      if (company) query += ` +"${company}"`;
      if (skills) {
         skills.split(",").forEach((skill) => {
            query += ` +"${skill.trim()}"`;
         });
      }
      return query;
   };

   const executeSearch = (useCustomQuery: boolean) => {
      let searchQuery;

      if (useCustomQuery) {
         // For custom query, ensure it still has the base X-ray search parameters
         if (customQuery.trim() === "") {
            alert("Please enter a search query");
            return;
         }

         // Check if the custom query already includes the site: parameter
         if (customQuery.toLowerCase().includes("site:(linkedin.com")) {
            searchQuery = customQuery;
         } else {
            // Add the base X-ray query to the custom search terms
            searchQuery = `${baseXrayQuery} ${customQuery}`;
         }
      } else {
         searchQuery = generateFormSearchString();

         // Validate that at least one search field is filled
         if (searchQuery.trim() === baseXrayQuery) {
            alert("Please enter at least one search criteria");
            return;
         }
      }

      window.open(
         `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`,
         "_blank"
      );
   };

   return (
      <div className="max-w-6xl mx-auto">
         <Card className="mb-6">
            <CardHeader>
               <CardTitle className="text-2xl font-bold">
                  LinkedIn X-Ray Search Tool
               </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               {/* Direct Boolean Search */}
               <div className="space-y-4">
                  <div>
                     <label className="block text-sm font-semibold mb-1">
                        Direct Boolean Search (Advanced)
                     </label>
                     <Input
                        placeholder="Enter search terms (LinkedIn site restrictions will be added automatically)"
                        value={customQuery}
                        onChange={(e) => setCustomQuery(e.target.value)}
                     />
                  </div>
                  <Button
                     className="w-full bg-blue-600 text-white hover:bg-blue-700"
                     onClick={() => executeSearch(true)}
                  >
                     <Search className="w-4 h-4 mr-2" />
                     Execute Direct Search
                  </Button>
               </div>

               {/* Visual Separator */}
               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                     <span className="bg-white px-2 text-gray-500">OR</span>
                  </div>
               </div>

               {/* Form-based Search */}
               <div className="space-y-4">
                  <div className="flex justify-between">
                     <div className="w-[44%]">
                        <label className="block text-sm font-semibold mb-1">
                           Job Title
                        </label>
                        <Input
                           placeholder="e.g., Software Engineer"
                           value={jobTitle}
                           onChange={(e) => setJobTitle(e.target.value)}
                        />
                     </div>
                     <div className="w-[25%]">
                        <label className="block text-sm font-semibold mb-1">
                           Location
                        </label>
                        <Input
                           placeholder="e.g., San Francisco"
                           value={location}
                           onChange={(e) => setLocation(e.target.value)}
                        />
                     </div>
                     <div className="w-[25%]">
                        <label className="block text-sm font-semibold mb-1">
                           Company
                        </label>
                        <Input
                           placeholder="e.g., Google"
                           value={company}
                           onChange={(e) => setCompany(e.target.value)}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-semibold mb-1">
                        Skills (comma-separated, ALL required)
                     </label>
                     <Input
                        placeholder="e.g., javascript, react, css"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                     />
                  </div>
                  <Button
                     className="w-full bg-slate-800 text-white hover:bg-slate-700"
                     onClick={() => executeSearch(false)}
                  >
                     <Search className="w-4 h-4 mr-2" />
                     Search with Form Fields
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
