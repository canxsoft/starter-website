"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WaitlistForm({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [type, setType] = useState<"business" | "event">("business");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type }),
      });

      if (!res.ok) throw new Error("Request failed");

      router.push(`/waitlist/confirmed?email=${encodeURIComponent(email)}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const inputClasses =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white placeholder:text-[var(--text-oninverse-soft)]"
      : "";

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="you@business.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn("flex-1", inputClasses)}
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "business" | "event")}
          className={cn(
            "h-12 rounded-full border px-4 text-sm",
            variant === "dark"
              ? "border-white/20 bg-white/10 text-white"
              : "border-[var(--line)] bg-white text-[var(--text)]"
          )}
        >
          <option value="business">I run a business</option>
          <option value="event">I organize events</option>
        </select>
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Joining..." : "Join the waitlist"}
      </Button>
      {error && <p className="text-sm text-[var(--accent2)]">{error}</p>}
    </form>
  );
}
