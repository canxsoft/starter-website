import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Customer stories and updates from Qwise — how real businesses and event organizers use digital queues.",
  alternates: { canonical: "https://qwise.app/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="px-7 pb-16 pt-20 text-center">
          <span className="text-sm font-semibold text-[var(--accent)]">Blog</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Stories from real queues.
          </h1>
        </div>

        <div className="px-7 pb-28">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[22px] border border-[var(--line-soft)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.14)]"
              >
                <div className="mb-3 flex items-center gap-3 text-xs font-semibold text-[var(--text-faint)]">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--accent-deep)]">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold group-hover:text-[var(--accent)]">{post.title}</h2>
                <p className="text-[var(--text-soft)]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
