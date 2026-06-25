import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://pazdaneri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const caseRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/casos/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
