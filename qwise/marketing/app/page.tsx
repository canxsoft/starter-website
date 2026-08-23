import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ForStrip } from "@/components/sections/for-strip";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { UseCasesPreview } from "@/components/sections/use-cases-preview";
import { PricingSection } from "@/components/sections/pricing-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ForStrip />
        <Features />
        <HowItWorks />
        <UseCasesPreview />
        <PricingSection id="pricing" />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
