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

   const generateSearchString = () => {
      let query = "site:(linkedin.com/in/ OR linkedin.com/pub/)";

      // Add job title with exact match
      if (jobTitle) {
         query += ` +"${jobTitle}"`;
      }

      // Add location
      if (location) {
         query += ` +"${location}"`;
      }

      // Add company
      if (company) {
         query += ` +"${company}"`;
      }

      // Add skills
      if (skills) {
         const skillsList = skills.split(",").map((skill) => skill.trim());
         skillsList.forEach((skill) => {
            query += ` +"${skill}"`;
         });
      }

      // Exclude unwanted results
      query += " -intitle:profiles -inurl:dir/";

      return query;
   };

   const executeSearch = () => {
      const searchQuery = generateSearchString();

      if (
         searchQuery.trim() ===
         "site:(linkedin.com/in/ OR linkedin.com/pub/) -intitle:profiles -inurl:dir/"
      ) {
         alert("Please enter at least one search criteria");
         return;
      }

      // Encode the query for URL
      const encodedQuery = encodeURIComponent(searchQuery);

      // Open Google search in a new tab
      window.open(`https://www.google.com/search?q=${encodedQuery}`, "_blank");
   };

   return (
      <div className="max-w-6xl mx-auto">
         <Card className="mb-6">
            <CardHeader>
               <CardTitle className="text-2xl font-bold">
                  Basic LinkedIn X-Ray Search Tool
               </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                     Skills (comma-separated)
                  </label>
                  <Input
                     placeholder="e.g., javascript, react, react native, css"
                     value={skills}
                     onChange={(e) => setSkills(e.target.value)}
                  />
               </div>
               <div className="flex items-center align-middle justify-center">
                  <Button
                     className="w-3/4 mt-4 bg-slate-800 text-white font-semibold hover:bg-slate-600 hover:text-white"
                     onClick={executeSearch}
                     variant="outline"
                  >
                     <Search className="w-4 h-4 mr-2" />
                     Search
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
