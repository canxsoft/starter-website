import type { MetadataRoute } from "next";
import { site, useCases, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/pricing", "/blog", "/join"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const useCaseRoutes = useCases.map((uc) => ({
    url: `${site.url}/${uc.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...useCaseRoutes, ...blogRoutes];
}
