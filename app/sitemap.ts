import type { MetadataRoute } from "next";
import { projects } from "../data/projects";

const siteUrl = "https://portfolio-abisheksa.vercel.app";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects/", "/experience/", "/research/", "/education/", "/about/"];
  return [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}/`, changeFrequency: "monthly" as const, priority: project.homepageFeatured ? 0.8 : 0.5 })),
  ];
}
