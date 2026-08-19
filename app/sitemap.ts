import type { MetadataRoute } from "next";
import { getAllContent } from "@/app/_lib/content";
import { absoluteUrl } from "@/app/_lib/seo";

const staticRoutes = [
  "/",
  "/about",
  "/projects",
  "/writing",
  "/lab",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getAllContent();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
  }));

  const contentEntries: MetadataRoute.Sitemap = content
    .filter((item) => item.published !== false)
    .map((item) => ({
      url: absoluteUrl(`/${item.type}/${item.slug}`),
      lastModified: new Date(item.date),
    }));

  return [...staticEntries, ...contentEntries];
}
