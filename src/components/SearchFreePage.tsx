"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function SearchFreePage() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const generateSearchString = () => {
    let query = "site:linkedin.com/in/";
    if (jobTitle) query += ` (intitle:${jobTitle} OR headline:${jobTitle})`;
    if (location) query += ` "${location}"`;
    if (company) query += ` (company:${company} OR "${company}")`;
    if (skills) {
      const skillsArray = skills.split(",").map((skill) => `"${skill.trim()}"`);
      query += ` (${skillsArray.join(" OR ")})`;
    }
    setSearchQuery(query);
  };

  return (
    <div className="max-w-3xl mx-auto mt-20">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">RecruitNinja - X-Ray Search</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <Input
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <Input
            placeholder="Skills (comma-separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <Button onClick={generateSearchString}>Search</Button>
        </CardContent>
      </Card>

      {searchQuery && (
        <iframe
          src={`https://cse.google.com/cse?cx=service_f3p82ac&q=${encodeURIComponent(
            searchQuery
          )}`}
          className="w-full h-[600px]"
        />
      )}
    </div>
  );
}
