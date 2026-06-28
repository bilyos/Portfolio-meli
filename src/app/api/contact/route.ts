import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export const runtime = "edge";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    ipBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Trop de tentatives, réessayez dans une minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Données invalides",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    if (result.data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, subject, message } = result.data;

    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <portfolio@resend.dev>",
          to: [process.env.CONTACT_EMAIL],
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto">
              <h2 style="margin:0 0 12px">Nouveau message portfolio</h2>
              <p><strong>De:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p>
              <p><strong>Sujet:</strong> ${escape(subject)}</p>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
              <p style="white-space:pre-wrap;line-height:1.6">${escape(message)}</p>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const txt = await resendResponse.text();
        console.error("Resend error:", txt);
        return NextResponse.json(
          { ok: false, error: "Erreur lors de l'envoi de l'email." },
          { status: 502 }
        );
      }
    } else {
      console.log(
        "[contact] (dev mode — no Resend key)",
        JSON.stringify({ name, email, subject, message }, null, 2)
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
