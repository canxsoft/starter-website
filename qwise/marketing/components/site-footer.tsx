import Link from "next/link";
import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line-soft)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-7 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            {site.name}
          </Link>
          <p className="mt-3 text-sm text-[var(--text-soft)]">{site.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              Product
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-soft)]">
              <li><Link href="/#features" className="hover:text-[var(--text)]">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[var(--text)]">Pricing</Link></li>
              <li><Link href="/#use-cases" className="hover:text-[var(--text)]">Use cases</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              Resources
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-soft)]">
              <li><Link href="/blog" className="hover:text-[var(--text)]">Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-[var(--text)]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              Company
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-soft)]">
              <li><Link href="/join" className="hover:text-[var(--text)]">Join waitlist</Link></li>
              <li><a href="mailto:hello@qwise.app" className="hover:text-[var(--text)]">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-7">
        <p className="text-xs text-[var(--text-faint)]">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
