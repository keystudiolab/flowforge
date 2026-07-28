import type { MetadataRoute } from "next";

const siteUrl = "https://flowforge-roan-three.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: siteUrl,
          en: `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: siteUrl,
          en: `${siteUrl}/en`,
        },
      },
    },
  ];
}