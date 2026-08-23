"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [num, setNum] = useState(42);

  useEffect(() => {
    const id = setInterval(() => {
      setNum((n) => (n >= 58 ? 42 : n + 1));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden px-7 pb-24 pt-28 text-center sm:pt-36">
      <div className="hero-glow pointer-events-none absolute left-1/2 top-[-220px] h-[560px] w-[900px] -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-6xl">
        <span className="text-sm font-semibold text-[var(--accent)]">Early access — now open</span>
        <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          {/* Skip the line. */}
          Simple digital queues for businesses and events.
          <br />
          {/* Ready in 2 minutes */}
          {/* Not the <span className="text-gradient">wait</span>. */}
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg text-[var(--text-soft)]">
          Qwise turns any waiting line — a barbershop, a clinic, a trade-show booth — into a
          digital queue.<br />
          Customers scan to join the queue, make use of their time, and get called back the moment it&rsquo;s
          their turn.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Button asChild size="lg">
            <Link href="/join">Join the waitlist</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#how">See how it works</Link>
          </Button>
        </div>
        <p className="mt-3.5 text-sm text-[var(--text-faint)]">
          No card required · <span className="font-semibold text-[var(--accent)]">Early access opens soon</span>
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex justify-center">
        <div className="w-full max-w-lg rounded-[22px] border border-[var(--line-soft)] bg-white p-8 text-left shadow-[0_40px_80px_-30px_rgba(0,0,0,0.22)]">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              Front Desk — Downtown
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent2)]">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent2)]" />
              LIVE
            </span>
          </div>
          <div className="mt-1 text-7xl font-extrabold tracking-tight">
            <span className="text-gradient">#</span>
            {String(num).padStart(3, "0")}
          </div>
          <p className="mb-5 text-sm text-[var(--text-soft)]">Now serving · Haircut — Standard</p>
          <div className="my-4 border-t border-[var(--line-soft)]" />
          <div className="flex justify-between py-1 text-sm text-[var(--text-soft)]">
            <span>Avg. wait</span>
            <b className="text-[var(--text)]">11 min</b>
          </div>
          <div className="flex justify-between py-1 text-sm text-[var(--text-soft)]">
            <span>Waiting now</span>
            <b className="text-[var(--text)]">7 people</b>
          </div>
          <div className="my-4 border-t border-[var(--line-soft)]" />
          {[
            { name: "Maria S.", tag: "#043 — up next" },
            { name: "Devon K.", tag: "#044" },
            { name: "Priya R.", tag: "#045" },
          ].map((q, i) => (
            <div
              key={q.name}
              className={`flex items-center justify-between py-2.5 text-sm ${
                i !== 0 ? "border-t border-[var(--line-soft)]" : ""
              }`}
            >
              <span>{q.name}</span>
              <span className="font-semibold text-[var(--accent)]">{q.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
