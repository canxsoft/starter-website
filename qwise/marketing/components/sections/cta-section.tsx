import { WaitlistForm } from "@/components/waitlist-form";

export function CtaSection() {
  return (
    <section id="waitlist" className="px-7 pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--ink)] p-9 text-white sm:p-16">
          <div className="dark-glow pointer-events-none absolute -right-24 -top-36 h-[480px] w-[480px] rounded-full" />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="text-sm font-semibold text-[#6AA5FF]">Reserve your spot</span>
              <h2 className="mt-3.5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Get early access before it opens.
              </h2>
              <p className="mt-4 max-w-md text-[var(--text-oninverse-soft)]">
                We&rsquo;re onboarding a small first group of businesses and event organizers.
                Join the waitlist and we&rsquo;ll reach out as spots open — no spam, no sales calls.
              </p>
            </div>
            <div>
              <WaitlistForm variant="dark" />
              <p className="mt-4 text-xs text-[var(--text-oninverse-soft)]">
                By joining, you&rsquo;ll get occasional updates about early access. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
