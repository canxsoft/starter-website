# Qwise marketing website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, with hand-built
shadcn/ui-style components on top of the real Radix primitives.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

This matches the hosting decision from the architecture doc: deploy to
**Vercel**, zero config needed for a stock Next.js app.

```bash
npx vercel
```

Or connect the repo in the Vercel dashboard and point the domain to
`qwise.app` once it's registered.

## What's real vs. placeholder

**Real / production-ready:**
- All routes, layouts, and static generation (`generateStaticParams` for
  every use-case and blog post)
- SEO metadata per page, sitemap.xml, robots.txt
- Structured data: Organization, SoftwareApplication, FAQPage, Article
  JSON-LD — plus `public/llms.txt` for AI answer engines
- Fully client-side interactive: pricing tabs, FAQ accordion, mobile nav,
  waitlist form validation

**Placeholder — wire up before real launch:**
- `app/api/waitlist/route.ts` currently validates and `console.log`s
  signups into an in-memory array. This is NOT persistent — it resets on
  every redeploy/cold start. Replace it with one of:
  - A POST to Resend / ConvertKit / Formspree (fastest, no backend needed)
  - A write to a real waitlist table once `packages/tenancy` and a database
    exist, per the platform-core architecture
- `hello@qwise.app` in the footer is a placeholder mailto — set up real
  inbox routing once the domain is registered
- No `favicon.ico` / OG image included yet — add brand assets to `/public`
- Testimonials in `lib/data.ts` are illustrative placeholders written to
  match the product's positioning, not real customers — replace with real
  quotes as soon as you have any, since fabricated testimonials are a
  credibility risk once the site is public
- `metadataBase` and all canonical URLs assume `https://qwise.app` — update
  if the final domain differs

## Content model

Everything — features, use cases, pricing, testimonials, FAQs, blog posts —
lives in `lib/data.ts` as typed arrays. Use-case and blog pages are
statically generated from that data via `generateStaticParams`, so adding a
new use case or blog post is just adding an entry to the array; no new
routing code needed.

## Design tokens

Colors and font stack live in `app/globals.css` as CSS custom properties
(`--accent`, `--accent2`, `--ink`, `--bg-alt`, etc.) — Apple-inspired
monochrome base with two bright accent colors used deliberately for
highlights. Font is the system font stack (`-apple-system` etc.), not a
webfont, matching the Apple-inspired direction and avoiding an external
font-loading dependency.
