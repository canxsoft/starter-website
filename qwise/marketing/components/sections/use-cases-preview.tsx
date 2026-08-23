import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCases } from "@/lib/data";

export function UseCasesPreview() {
  return (
    <section id="use-cases" className="px-7 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-[var(--accent)]">Use cases</span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              One queue, or twenty across a whole event.
            </h2>
          </div>
          <Link
            href="/#use-cases"
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-deep)]"
          >
            See all use cases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/${uc.slug}`}
              className="group rounded-[22px] border border-[var(--line-soft)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.14)]"
            >
              <span
                className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  uc.category === "event"
                    ? "bg-[var(--accent2-soft)] text-[var(--accent2)]"
                    : "bg-[var(--accent-soft)] text-[var(--accent-deep)]"
                }`}
              >
                {uc.category === "event" ? "Event" : "Business"}
              </span>
              <h3 className="mb-2 text-xl font-bold">{uc.shortTitle}</h3>
              <p className="mb-4 text-[15px] text-[var(--text-soft)]">{uc.summary}</p>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
