import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: "https://recruitcatch.com/",
         lastModified: new Date(),
         changeFrequency: "yearly",
         priority: 1,
      },
      //   {
      //      url: "https://recruitcatch.com/about",
      //      lastModified: new Date(),
      //      changeFrequency: "monthly",
      //      priority: 0.8,
      //   },
      {
         url: "https://recruitcatch.com/contact",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
      {
         url: "https://recruitcatch.com/privacy",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
      {
         url: "https://recruitcatch.com/tos",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
   ];
}
