const items = [
  "Barbers & salons",
  "Clinics",
  "Auto & device repair",
  "Pet grooming",
  "Retail & walk-ins",
  "Trade shows & expos",
  "Pop-ups & job fairs",
];

export function ForStrip() {
  return (
    <div className="mx-auto max-w-5xl px-7 pb-4">
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-white px-4.5 py-2.5 text-sm font-medium text-[var(--text-soft)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
