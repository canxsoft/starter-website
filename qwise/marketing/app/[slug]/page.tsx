import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCases } from "@/lib/data";

// Reject unknown slugs at request time so non-listed paths 404 cleanly
// instead of rendering with a missing record.
export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return {};
  return {
    title: uc.seoTitle,
    description: uc.metaDescription,
    keywords: [uc.primaryKeyword, "digital queue", "queue management"],
    alternates: { canonical: `https://qwise.app/${uc.slug}` },
    openGraph: {
      type: "article",
      title: uc.seoTitle,
      description: uc.metaDescription,
      url: `https://qwise.app/${uc.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: uc.seoTitle,
      description: uc.metaDescription,
    },
  };
}

export default async function UseCasePillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: uc.title,
    description: uc.metaDescription,
    articleSection: "Use cases",
    keywords: uc.primaryKeyword,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        {/* Hero */}
        <div className="px-7 pb-14 pt-20">
          <div className="mx-auto max-w-3xl">
            <span
              className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                uc.category === "event"
                  ? "bg-[var(--accent2-soft)] text-[var(--accent2)]"
                  : "bg-[var(--accent-soft)] text-[var(--accent-deep)]"
              }`}
            >
              {uc.category === "event" ? "Event" : "Business"}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {uc.title}
            </h1>
            <p className="mt-5 text-lg text-[var(--text-soft)]">{uc.summary}</p>

            <div className="mt-8 inline-flex items-baseline gap-2 rounded-2xl border border-[var(--line-soft)] bg-white px-6 py-4">
              <span className="text-3xl font-extrabold text-[var(--accent)]">
                {uc.heroStat.value}
              </span>
              <span className="text-sm text-[var(--text-soft)]">
                {uc.heroStat.label}
              </span>
            </div>
          </div>
        </div>

        {/* Intro paragraph */}
        <div className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-[17px] leading-relaxed text-[var(--text-soft)]">
              {uc.intro}
            </p>
          </div>
        </div>

        {/* Problem */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {uc.problem.heading}
            </h2>
            <p className="text-[17px] leading-relaxed text-[var(--text-soft)]">
              {uc.problem.body}
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {uc.whyItMatters.heading}
            </h2>
            <div className="space-y-4">
              {uc.whyItMatters.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-[var(--text-soft)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Solution / how Qwise helps */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
              {uc.solutionPoints.heading}
            </h2>
            <ul className="space-y-3">
              {uc.solutionPoints.items.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[var(--text-soft)]"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <span className="text-[16px] leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
              {uc.benefits.heading}
            </h2>
            <ul className="space-y-3">
              {uc.benefits.items.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[var(--text-soft)]"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent2)]" />
                  <span className="text-[16px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              {uc.howItWorks.heading}
            </h2>
            <ol className="space-y-5">
              {uc.howItWorks.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-[var(--line-soft)] bg-white p-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-[var(--accent)]">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-soft)]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Best for */}
        <section className="px-7 pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Best for
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {uc.bestFor.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-soft)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-7 pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <span className="text-sm font-semibold text-[var(--accent)]">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Questions about {uc.shortTitle.toLowerCase()}.
              </h2>
            </div>
            <Accordion type="single" collapsible>
              {uc.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related plan CTA */}
        <div className="px-7 pb-20">
          <div className="mx-auto max-w-3xl rounded-2xl bg-[var(--bg-alt)] p-8">
            <p className="text-sm text-[var(--text-soft)]">
              Best matched plan:{" "}
              <span className="font-semibold text-[var(--text)]">
                {uc.relatedPlan}
              </span>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/join">Join the waitlist</Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href={uc.relatedPlanHref}
                  className="flex items-center gap-1.5"
                >
                  See full pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
