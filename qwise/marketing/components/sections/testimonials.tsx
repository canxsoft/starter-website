import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-[var(--bg-alt)] px-7 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-xl">
          <span className="text-sm font-semibold text-[var(--accent)]">Early feedback</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            What people say once the line disappears.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-[22px] border border-[var(--line-soft)] bg-white p-8">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-[var(--text)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-sm font-bold text-white"
                  aria-hidden
                >
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[var(--text-soft)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
