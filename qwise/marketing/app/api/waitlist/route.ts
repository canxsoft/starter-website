import { NextRequest, NextResponse } from "next/server";

// TEMPORARY implementation. Qwise's backend (packages/notifications,
// packages/usage per the platform-core architecture) doesn't exist yet, so
// this route just validates and logs the signup for now.
//
// Before real launch, replace the body of this handler with one of:
//   - A POST to Resend / ConvertKit / Formspree to actually capture the email
//   - A write to your own waitlist table once packages/tenancy + a DB exist
//
// Do NOT ship this in-memory / log-only version to production — signups
// will be lost on every redeploy or cold start.

const waitlist: { email: string; type: string; joinedAt: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email, type } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const entry = {
      email,
      type: type === "event" ? "event" : "business",
      joinedAt: new Date().toISOString(),
    };
    waitlist.push(entry);

    // Dev-time log until real waitlist storage exists — see TODO above.
    console.log("[waitlist] new signup:", entry);

    return NextResponse.json({ ok: true, position: waitlist.length });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
