import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Qwise pricing: a monthly plan for businesses that queue every day, or a one-time Event Pass for a single trade show, expo, or pop-up. No hidden fees.",
  alternates: { canonical: "https://qwise.app/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="px-7 pt-20 text-center">
          <span className="text-sm font-semibold text-[var(--accent)]">Pricing</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Simple pricing, for how you actually queue.
          </h1>
        </div>
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
