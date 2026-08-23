"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[var(--accent)]">
          {/* <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" /> */}
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/join">Join waitlist</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line-soft)] bg-white px-7 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-soft)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/join">Join waitlist</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
