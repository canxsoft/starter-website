import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Join the waitlist — Qwise",
  description:
    "Qwise is in development. Join the waitlist to get early access to digital queues for your business or event.",
  alternates: { canonical: "https://qwise.app/join" },
};

export default function JoinPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-xl px-7 py-24 text-center">
        <span className="text-sm font-semibold text-[var(--accent)]">Early access</span>
        <h1 className="mt-3 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Get early access to Qwise.
        </h1>
        <p className="mb-10 text-lg text-[var(--text-soft)]">
          Leave your email and tell us how you&rsquo;d use it. We&rsquo;re onboarding a small
          first group of businesses and event organizers as early access opens.
        </p>
        <WaitlistForm className="text-left" />
        <p className="mt-6 text-xs text-[var(--text-faint)]">
          By joining, you&rsquo;ll get occasional updates about early access. Unsubscribe anytime.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
