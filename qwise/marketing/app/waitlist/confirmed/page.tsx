import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "You're on the list — Qwise",
  description: "You've joined the Qwise waitlist. We'll email you as soon as early access opens.",
  robots: { index: false, follow: true },
};

function Confirmed() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-7 py-28 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)]">
        <CheckCircle2 className="h-8 w-8 text-[var(--accent)]" />
      </div>
      <span className="mb-3 text-sm font-semibold text-[var(--accent)]">You&rsquo;re on the list</span>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Qwise is still under development.
      </h1>
      <p className="mb-10 max-w-md text-lg text-[var(--text-soft)]">
        We&rsquo;re building it right now and onboarding from the waitlist in small batches.
        We&rsquo;ll email you the moment early access opens for you — no spam, no sales calls in the meantime.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline">
          <Link href="/blog">Read customer stories</Link>
        </Button>
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </main>
  );
}

export default function WaitlistConfirmedPage() {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={null}>
        <Confirmed />
      </Suspense>
      <SiteFooter />
    </>
  );
}
