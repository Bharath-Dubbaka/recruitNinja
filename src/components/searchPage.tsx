"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

interface SearchResult {
   title: string;
   link: string;
   snippet: string;
   image?: string; // Add the image property as optional
}

export default function SearchPage() {
   const [keywords, setKeywords] = useState("");
   const [jobTitle, setJobTitle] = useState("");
   const [location, setLocation] = useState("");
   const [company, setCompany] = useState("");
   const [skills, setSkills] = useState("");
   const [searchString, setSearchString] = useState("");
   const [showResults, setShowResults] = useState(false);
   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
   //    console.log(searchResults, "line25");
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1); // Pagination state

   React.useEffect(() => {
      // Only fetch results if there's a non-empty search string
      if (searchString && searchString.trim() !== "site:linkedin.com/in/") {
         fetchResults(page);
      }
   }, [page, searchString]);

   const fetchResults = async (page: number) => {
      // Skip fetching if search string is empty
      if (!searchString || searchString.trim() === "site:linkedin.com/in/") {
         setSearchResults([]);
         return;
      }
      // Fetch search results from API with pagination
      const startIndex = (page - 1) * 10 + 1; // API uses 1-based indexing for start
      const params = new URLSearchParams({
         cx: process.env.NEXT_PUBLIC_CSE_SEARCH_ENGINE_ID || "", // Your Custom Search Engine ID
         key: process.env.NEXT_PUBLIC_CSE_API_KEY || "", // Your API Key
         q: searchString, // Example query
         start: startIndex.toString(), // Pagination index
      });

      const response = await fetch(
         `https://www.googleapis.com/customsearch/v1?${params}`
      );
      const data = await response.json();

      const results =
         data.items?.map((item: any) => ({
            title: item.title || "",
            link: item.link || "",
            snippet: item.snippet || "",
            image: item.pagemap?.cse_image?.[0]?.src || "",
         })) || [];

      setSearchResults(results);
   };

   const generateSearchString = () => {
      let query = "site:linkedin.com/in/";

      if (keywords) {
         query += ` "${keywords}"`;
      }

      if (jobTitle) {
         query += ` (intitle:${jobTitle} OR headline:${jobTitle})`;
      }

      if (location) {
         query += ` "${location}"`;
      }

      if (company) {
         query += ` (company:${company} OR "${company}")`;
      }

      if (skills) {
         const skillsList = skills.split(",").map((skill) => skill.trim());
         const skillsQuery = skillsList
            .map((skill) => `"${skill}"`)
            .join(" OR ");
         query += ` (${skillsQuery})`;
      }

      setSearchString(query);
      console.log("Generated Query:", query);

      // Check if query is meaningful
      if (query.trim() !== "site:linkedin.com/in/") {
         setSearchString(query);
         executeSearch(query);
      } else {
         alert("Please enter at least one search criteria");
      }
   };

   const executeSearch = async (queryToSearch?: string) => {
      const searchQueryToUse = queryToSearch || searchString;

      if (!searchQueryToUse) return;

      setLoading(true);
      setPage(1);
      try {
         const params = new URLSearchParams({
            rsz: "filtered_cse",
            // num: "10",
            // hl: "en",
            source: "gcsc",
            cselibv: "5c8d58cbdc1332a7", // Use a consistent, known value
            cx: process.env.NEXT_PUBLIC_CSE_SEARCH_ENGINE_ID || "", // Your Custom Search Engine ID
            key: process.env.NEXT_PUBLIC_CSE_API_KEY || "", // Your API Key
            q: searchQueryToUse, // Use the generated search query string
         });

         const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?${params.toString()}`,
            {
               method: "GET",
               headers: {
                  Accept: "application/json",
                  Referer: "https://cse.google.com/",
               },
            }
         );

         if (!response.ok) {
            const errorText = await response.text();
            console.error("Full error response:", errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const data = await response.json();

         // 🆕 Map the response to extract search result information, including images
         const results =
            data?.items?.map((item: any) => ({
               title: item.title || "",
               link: item.link || "",
               snippet: item.snippet || "",

               image:
                  item.pagemap?.cse_image?.[0]?.src || // Extract image source if available
                  item.pagemap?.cse_thumbnail?.[0]?.src ||
                  "", // Fallback to thumbnail if image not available
            })) || [];
         //  console.log(results, "RES");
         setSearchResults(results);
      } catch (error) {
         console.error("Search failed:", error);
         setSearchResults([]);
      } finally {
         setLoading(false);
      }
   };

   //    console.log(searchResults, "searchResults outside");
   return (
    
      <div className="max-w-3xl mx-auto mt-20" >
         <div className={`grid ${showResults ? "grid-cols-1" : "grid-cols-1"}`}>
            <div>
               <Card className="mb-6">
                  <CardHeader>
                     <CardTitle className="text-2xl font-bold flex justify-between items-center">
                        RecruitNinja - LinkedIn X-Ray Search Tool
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {/* <div>
                        <label className="block text-sm font-medium mb-1">
                           Exact Phrase/Must Have - PREMIUM
                        </label>
                        <Input
                           placeholder="Enter general keywords"
                           value={keywords}
                           onChange={(e: any) => setKeywords(e.target.value)}
                        />
                     </div> */}
                     <div className="flex justify-between">
                        <div className="w-[44%]">
                           <label className="block text-sm font-semibold mb-1">
                              Job Title
                           </label>
                           <Input
                              placeholder="e.g., Software Engineer"
                              value={jobTitle}
                              onChange={(e: any) => setJobTitle(e.target.value)}
                           />
                        </div>
                        <div className="w-[25%]">
                           <label className="block text-sm font-semibold mb-1">
                              Location
                           </label>
                           <Input
                              placeholder="e.g., San Francisco"
                              value={location}
                              onChange={(e: any) => setLocation(e.target.value)}
                              //multiple locations at once - PREMIUM
                           />
                        </div>

                        <div className="w-[25%]">
                           <label className="block text-sm font-semibold mb-1">
                              Company
                           </label>
                           <Input
                              placeholder="e.g., Google"
                              value={company}
                              onChange={(e: any) => setCompany(e.target.value)}
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
                           onChange={(e: any) => setSkills(e.target.value)}
                           // skills with AND OR compilation -  PREMIUM*
                        />
                     </div>
                     <div className="flex items-center align-middle justify-center">
                        <Button
                           className=" w-3/4 mt-4 bg-slate-800 text-white font-semibold hover:bg-slate-600 hover:text-white"
                           onClick={generateSearchString}
                           variant="outline"
                        >
                           <Search className="w-4 h-4 mr-2" />
                           Search
                        </Button>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* 🆕 NEW SEARCH RESULTS DISPLAY */}
            {loading && <p>Loading results...</p>}
            {searchResults.length > 0 && (
               <Card className="mt-4 mb-24">
                  <CardHeader>
                     <CardTitle>Search Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                     {searchResults.map((result, index) => (
                        <div
                           key={index}
                           className="border-b py-3 last:border-b-0 hover:bg-gray-50"
                        >
                           <a
                              href={result.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline flex"
                           >
                              {result.image && (
                                 <Image
                                    src={`/api/proxy-image?url=${encodeURIComponent(
                                       result.image
                                    )}`}
                                    alt="Profile"
                                    width={65}
                                    height={65}
                                    style={{
                                       width: 65,
                                       height: 65,
                                       marginRight: "10px",
                                       justifyContent: "center",
                                       objectFit: "cover", // This will maintain the aspect ratio
                                       borderRadius: "0.5rem", // equivalent to rounded-lg
                                    }}
                                    onError={(e) => {
                                       console.error("Image load error", e);
                                       e.currentTarget.style.display = "none";
                                    }}
                                 />
                              )}
                              <div className="">
                                 <div className="font-bold text-md">
                                    {result.title}
                                 </div>
                                 <p className="text-sm text-gray-600 mt-1">
                                    {result.snippet}
                                 </p>
                              </div>
                           </a>
                        </div>
                     ))}

                     {/* Pagination Controls */}
                     <div className="mt-4 flex justify-between">
                        <button
                           className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded "
                           onClick={() =>
                              setPage((prev) => Math.max(prev - 1, 1))
                           }
                           disabled={page === 1}
                        >
                           Previous
                        </button>
                        <span className="font-semibold">Page {page}</span>
                        <button
                           className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded "
                           onClick={() => setPage((prev) => prev + 1)}
                        >
                           Next
                        </button>
                     </div>
                  </CardContent>
               </Card>
            )}
         </div>
      </div>
   );
}
