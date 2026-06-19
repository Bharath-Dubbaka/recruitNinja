import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/whyus", "/api/"],
    },
    sitemap: "https://recruitcatch.netlify.app/sitemap.xml",
  };
}
