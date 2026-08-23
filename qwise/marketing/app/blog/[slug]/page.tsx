import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/sections/cta-section";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://qwise.app/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <article className="px-7 pb-20 pt-20">
          <div className="mx-auto max-w-2xl">
            <Link href="/blog" className="mb-6 inline-block text-sm font-semibold text-[var(--accent)]">
              ← Back to blog
            </Link>
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold text-[var(--text-faint)]">
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
            <h1 className="mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>

            <div className="space-y-5 text-lg leading-relaxed text-[var(--text-soft)]">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between rounded-2xl bg-[var(--bg-alt)] p-6">
              <p className="text-sm text-[var(--text-soft)]">Want to run a queue like this one?</p>
              <Link href="/join" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
