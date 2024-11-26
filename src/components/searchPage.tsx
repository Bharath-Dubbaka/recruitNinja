"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

export default function SearchPage() {
   const [keywords, setKeywords] = useState("");
   const [jobTitle, setJobTitle] = useState("");
   const [location, setLocation] = useState("");
   const [company, setCompany] = useState("");
   const [skills, setSkills] = useState("");
   const [searchString, setSearchString] = useState("");
   const [showResults, setShowResults] = useState(false);
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

   useEffect(() => {
      if (showResults) {
         // 🆕 Function to handle iframe content
         const handleIframeLoad = () => {
            // 🆕 Select iframe element
            const iframe = document.getElementById(
               "search-results-iframe"
            ) as HTMLIFrameElement;
            const iframeDoc =
               iframe?.contentDocument || iframe?.contentWindow?.document;

            if (iframeDoc) {
               // 🆕 Add click event listener to intercept links
               iframeDoc.addEventListener("click", (e) => {
                  const target = e.target as HTMLElement;
                  const link = target.closest("a") as HTMLAnchorElement;

                  // 🆕 Check if clicked link is a LinkedIn profile
                  if (link && link.href.includes("linkedin.com/in/")) {
                     e.preventDefault(); // 🆕 Prevent default link behavior
                     window.open(link.href, "_blank"); // 🆕 Open in new tab
                  }
               });
            }
         };

         // 🆕 Attach load event listener to iframe
         const iframe = document.getElementById(
            "search-results-iframe"
         ) as HTMLIFrameElement;
         if (iframe) {
            iframe.addEventListener("load", handleIframeLoad);
            return () => {
               iframe.removeEventListener("load", handleIframeLoad);
            };
         }

         //  localStorage.setItem(
         //     "visitedProfiles",
         //     JSON.stringify(visitedProfiles)
         //  );
      }
   }, [
      showResults,
      // visitedProfiles
   ]);

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
      setShowResults(true);
   };

   const closeResults = () => {
      setShowResults(false);
   };

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
                        LinkedIn X-Ray Search Tool
                        <div className="flex items-center space-x-2">
                           {/* <Checkbox
                              id="hide-visited"
                              checked={hideVisited}
                              onCheckedChange={(checked: any) =>
                                 setHideVisited(!!checked)
                              }
                           /> */}
                           <label
                              htmlFor="hide-visited"
                              className="text-sm font-medium"
                           >
                              Hide Visited Profiles
                           </label>
                        </div>
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

                     <div className="flex justify-between items-center mt-4">
                        {/* {visitedProfiles.length > 0 && ( */}
                        <Button
                        //   variant="destructive"
                        //   size="sm"
                        //   onClick={clearVisitedProfiles}
                        >
                           Clear Visited Profiles
                        </Button>
                        {/* )} */}
                        {/* <p className="text-sm text-muted-foreground">
                           Visited Profiles: {visitedProfiles.length}
                        </p> */}
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

            {showResults && (
               <div className="relative">
                  <Card className="h-full">
                     <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Search Results</CardTitle>
                        <Button variant="ghost" onClick={closeResults}>
                           <X className="h-4 w-4" />
                        </Button>
                     </CardHeader>
                     {/* <CardContent>
                        <div className="h-[800px]">
                           <iframe
                              src={`https://www.google.com/search?igu=1&q=${encodeURIComponent(
                                 searchString
                              )}`}
                              className="w-full h-full border-0"
                              title="Search Results"
                              onLoad={(e) => {
                                 const iframe = e.currentTarget;
                                 // Inject script to track and filter visited profiles
                                 const script =
                                    iframe.contentWindow?.document.createElement(
                                       "script"
                                    );
                                 if (script) {
                                    script.textContent = `
                                       (function() {
                                          const visitedProfiles = ${JSON.stringify(
                                             visitedProfiles
                                          )};
                                          const hideVisited = ${hideVisited};

                                          function filterProfiles() {
                                             const links = document.querySelectorAll('a');
                                             links.forEach(link => {
                                                const href = link.href;
                                                if (href.includes('linkedin.com/in/')) {
                                                   const isVisited = visitedProfiles.includes(href);
                                                   if (hideVisited && isVisited) {
                                                      link.closest('.g')?.remove();
                                                   } else {
                                                      link.addEventListener('click', () => {
                                                         window.parent.postMessage({
                                                            type: 'visitProfile', 
                                                            url: href
                                                         }, '*');
                                                      });
                                                   }
                                                }
                                             });
                                          }

                                          filterProfiles();
                                       })();
                                    `;
                                    iframe.contentWindow?.document.body.appendChild(
                                       script
                                    );
                                 }
                              }}
                           />
                        </div>
                     </CardContent> */}
                     <CardContent>
                        <div className="h-[800px]">
                           {/* 🆕 HIGHLIGHT: Added ID to iframe */}
                           <iframe
                              id="search-results-iframe"
                              src={`https://www.google.com/search?igu=1&q=${encodeURIComponent(
                                 searchString
                              )}`}
                              className="w-full h-full border-0"
                              title="Search Results"
                           />
                        </div>
                     </CardContent>
                  </Card>
               </div>
            )}
         </div>

         {/* Event listener for profile visits */}
         {/* <script
            dangerouslySetInnerHTML={{
               __html: `
                  window.addEventListener('message', (event) => {
                     if (event.data.type === 'visitProfile') {
                        window.dispatchEvent(new CustomEvent('profileVisited', { 
                           detail: { url: event.data.url } 
                        }));
                     }
                  });
               `,
            }}
         /> */}
      </div>
   );
}
