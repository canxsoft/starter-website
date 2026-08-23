import Link from "next/link";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { businessPlans, eventPlans, type Plan } from "@/lib/data";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-[22px] p-8 ${
        plan.featured
          ? "bg-[var(--ink)] text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)]"
          : "border border-[var(--line-soft)] bg-white"
      }`}
    >
      {plan.badge && (
        <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-3 py-1 text-[11px] font-bold text-white">
          {plan.badge}
        </span>
      )}
      <h3 className="text-2xl font-extrabold">{plan.name}</h3>
      <p className={`mt-1.5 min-h-[34px] text-sm ${plan.featured ? "text-[var(--text-oninverse-soft)]" : "text-[var(--text-soft)]"}`}>
        {plan.tagline}
      </p>
      <p className="mt-4 flex items-baseline gap-1.5 text-4xl font-extrabold tracking-tight">
        {plan.price}
        {plan.unit && (
          <span className={`text-sm font-medium ${plan.featured ? "text-[var(--text-oninverse-soft)]" : "text-[var(--text-soft)]"}`}>
            {plan.unit}
          </span>
        )}
      </p>
      <ul className="my-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-[var(--accent)]" : "text-[var(--accent)]"}`} />
            <span className={plan.featured ? "text-[var(--text-oninverse-soft)]" : "text-[var(--text-soft)]"}>{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={plan.featured ? "default" : "outline"} className={plan.featured ? "" : ""}>
        <Link href="/join">{plan.cta}</Link>
      </Button>
    </div>
  );
}

export function PricingSection({ id }: { id?: string }) {
  return (
    <section id={id} className="px-7 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-sm font-semibold text-[var(--accent)]">Pricing</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Choose how you&rsquo;ll use it.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-soft)]">
            A subscription for a business that queues every day, or a one-time pass for a
            single event. Pick the one that matches how you&rsquo;ll actually use it.
          </p>
        </div>

        <Tabs defaultValue="business" className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="business">For your business</TabsTrigger>
            <TabsTrigger value="event">For your event</TabsTrigger>
          </TabsList>
          <p className="mt-4 text-sm text-[var(--text-faint)]">
            Growth includes event-mode up to 2 events/month at no extra cost — buy a pass only
            if you need more.
          </p>

          <TabsContent value="business" className="w-full">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {businessPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="event" className="w-full">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {eventPlans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
