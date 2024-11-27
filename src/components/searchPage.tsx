"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

interface SearchResult {
   title: string;
   link: string;
   snippet: string;
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
   const [loading, setLoading] = useState(false);
   //    const [visitedProfiles, setVisitedProfiles] = useState<string[]>(() => {
   //       // Load visited profiles from localStorage on initial render
   //       const saved = localStorage.getItem("visitedProfiles");
   //       return saved ? JSON.parse(saved) : [];
   //    });
   //    const [hideVisited, setHideVisited] = useState(false);

   // Save visited profiles to localStorage whenever it changes
   //    useEffect(() => {
   //       localStorage.setItem("visitedProfiles", JSON.stringify(visitedProfiles));
   //    }, [visitedProfiles]);

   //    useEffect(() => {
   //       if (showResults) {
   //          // 🆕 Function to handle iframe content
   //          const handleIframeLoad = () => {
   //             // 🆕 Select iframe element
   //             const iframe = document.getElementById(
   //                "search-results-iframe"
   //             ) as HTMLIFrameElement;
   //             const iframeDoc =
   //                iframe?.contentDocument || iframe?.contentWindow?.document;

   //             if (iframeDoc) {
   //                // 🆕 Add click event listener to intercept links
   //                iframeDoc.addEventListener("click", (e) => {
   //                   const target = e.target as HTMLElement;
   //                   const link = target.closest("a") as HTMLAnchorElement;

   //                   // 🆕 Check if clicked link is a LinkedIn profile
   //                   if (link && link.href.includes("linkedin.com/in/")) {
   //                      e.preventDefault(); // 🆕 Prevent default link behavior
   //                      window.open(link.href, "_blank"); // 🆕 Open in new tab
   //                   }
   //                });
   //             }
   //          };

   //          // 🆕 Attach load event listener to iframe
   //          const iframe = document.getElementById(
   //             "search-results-iframe"
   //          ) as HTMLIFrameElement;
   //          if (iframe) {
   //             iframe.addEventListener("load", handleIframeLoad);
   //             return () => {
   //                iframe.removeEventListener("load", handleIframeLoad);
   //             };
   //          }

   //          //  localStorage.setItem(
   //          //     "visitedProfiles",
   //          //     JSON.stringify(visitedProfiles)
   //          //  );
   //       }
   //    }, [
   //       showResults,
   //       // visitedProfiles
   //    ]);

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
   };

   const executeSearch = async () => {
      if (!searchString) return;

      setLoading(true);
      try {
         const params = new URLSearchParams({
            rsz: "filtered_cse",
            // num: "10",
            // hl: "en",
            source: "gcsc",
            cselibv: "5c8d58cbdc1332a7", // Use a consistent, known value
            cx: "e0fdf08f943434fa8", // Your Custom Search Engine ID
            key: "AIzaSyAWqo3D1Etn9xvZO5RpN6QcW0n0e-9OHo8", // Your API Key
            q: searchString, // Use the generated search query string
         });

         const response = await fetch(
            `https://cse.google.com/cse/element/v1?${params.toString()}`,
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

         const results =
            data.results?.map((item: any) => ({
               title: item.titleNoFormatting || "",
               link: item.unescapedUrl || "",
               snippet: item.contentNoFormatting || "",
            })) || [];

         setSearchResults(results);
      } catch (error) {
         console.error("Search failed:", error);
         setSearchResults([]);
      } finally {
         setLoading(false);
      }
   };

   console.log(searchResults, "searchResults outside");

   //    const executeSearch = async () => {
   //       setShowResults(true);
   //    };

   //    const closeResults = () => {
   //       setShowResults(false);
   //    };

   //    const markProfileAsVisited = (profileUrl: string) => {
   //       if (!visitedProfiles.includes(profileUrl)) {
   //          setVisitedProfiles((prev) => [...prev, profileUrl]);
   //       }
   //    };

   //    const clearVisitedProfiles = () => {
   //       setVisitedProfiles([]);
   //       localStorage.removeItem("visitedProfiles");
   //    };

   return (
      <div className="max-w-6xl mx-auto">
         <div className={`grid ${showResults ? "grid-cols-1" : "grid-cols-1"}`}>
            <div>
               <Card className="mb-6">
                  <CardHeader>
                     <CardTitle className="text-2xl font-bold flex justify-between items-center">
                        RecruitNinja - LinkedIn X-Ray Search Tool
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {/* ... previous input fields remain the same ... */}
                     <div>
                        <label className="block text-sm font-medium mb-1">
                           Keywords
                        </label>
                        <Input
                           placeholder="Enter general keywords"
                           value={keywords}
                           onChange={(e: any) => setKeywords(e.target.value)}
                        />
                     </div>

                     <div className="flex">
                        <div className="w-[50%]">
                           <label className="block text-sm font-medium mb-1">
                              Job Title
                           </label>
                           <Input
                              placeholder="e.g., Software Engineer"
                              value={jobTitle}
                              onChange={(e: any) => setJobTitle(e.target.value)}
                           />
                        </div>
                        <div className="w-[50%]">
                           <label className="block text-sm font-medium mb-1">
                              Location
                           </label>
                           <Input
                              placeholder="e.g., San Francisco"
                              value={location}
                              onChange={(e: any) => setLocation(e.target.value)}
                           />
                        </div>
                     </div>

                     <div>
                        <label className="block text-sm font-medium mb-1">
                           Company
                        </label>
                        <Input
                           placeholder="e.g., Google"
                           value={company}
                           onChange={(e: any) => setCompany(e.target.value)}
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium mb-1">
                           Skills (comma-separated)
                        </label>
                        <Input
                           placeholder="e.g., python, javascript, react"
                           value={skills}
                           onChange={(e: any) => setSkills(e.target.value)}
                        />
                     </div>
                     <div className="flex gap-4">
                        <Button
                           className="w-full"
                           onClick={generateSearchString}
                        >
                           Generate Search String
                        </Button>
                        <Button
                           className="w-full"
                           onClick={executeSearch}
                           disabled={!searchString}
                           variant="outline"
                        >
                           <Search className="w-4 h-4 mr-2" />
                           Search
                        </Button>
                     </div>

                     {searchString && (
                        <div className="mt-4 p-4 bg-slate-100 rounded-md">
                           <p className="font-mono text-sm break-all">
                              {searchString}
                           </p>
                        </div>
                     )}
                  </CardContent>
               </Card>
            </div>

            {/* 🆕 NEW SEARCH RESULTS DISPLAY */}
            {loading && <p>Loading results...</p>}
            {searchResults.length > 0 && (
               <Card className="mt-4">
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
                              className="text-blue-600 hover:underline"
                           >
                              {result.title}
                           </a>
                           <p className="text-sm text-gray-600 mt-1">
                              {result.snippet}
                           </p>
                        </div>
                     ))}
                  </CardContent>
               </Card>
            )}
         </div>
      </div>
   );
}
