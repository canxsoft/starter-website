import { QrCode, RefreshCw, BellRing, LayoutDashboard, Sparkles, BarChart3, type LucideIcon } from "lucide-react";
import { features } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  QrCode,
  RefreshCw,
  BellRing,
  LayoutDashboard,
  Sparkles,
  BarChart3,
};

const colors = ["bg-[var(--accent)]", "bg-[var(--accent2)]", "bg-[var(--ink)]", "bg-[var(--ink)]", "bg-[var(--accent2)]", "bg-[var(--accent)]"];

export function Features() {
  return (
    <section id="features" className="px-7 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-xl">
          <span className="text-sm font-semibold text-[var(--accent)]">What you get</span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything a line needs. Nothing it doesn&rsquo;t.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-soft)]">
            Built for the front desk, not the enterprise IT department. Set up a queue in
            minutes, no hardware or kiosks required.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={f.title}
                className="rounded-[22px] border border-[var(--line-soft)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.14)]"
              >
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${colors[i]}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                <p className="text-[15px] text-[var(--text-soft)]">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
