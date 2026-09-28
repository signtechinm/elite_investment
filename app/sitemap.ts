import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/capabilities", "/markets", "/approach", "/insights", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://investelite.org${route}`, lastModified: new Date("2026-09-28"), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
