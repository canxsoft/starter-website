import { howItWorks } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how" className="bg-[var(--bg-alt)] px-7 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-xl">
          <span className="text-sm font-semibold text-[var(--accent)]">How it works</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Three steps, from either side of the counter.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {howItWorks.map((s) => (
            <div key={s.step} className="rounded-[22px] border border-[var(--line-soft)] bg-white p-8">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-extrabold text-white">
                {s.step}
              </div>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-[15px] text-[var(--text-soft)]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
