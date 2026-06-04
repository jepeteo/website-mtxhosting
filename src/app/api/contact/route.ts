import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactBody } from "@/lib/contact";
import { getPlanById } from "@/lib/plans";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "MTX Hosting <hosting@mtxstudio.com>";
const toEmail = process.env.CONTACT_TO_EMAIL ?? "hosting@mtxstudio.com";

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 503 },
    );
  }

  const ip = getClientIp(request);
  const limited = rateLimit(ip);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const result = validateContactBody(body, {
    honeypot: typeof raw.company === "string" ? raw.company : undefined,
  });
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const { name, email, plan, hostingType, repoUrl, message } = result.data;
  const planLabel = getPlanById(plan)?.name ?? plan;

  const subject = `MTX Hosting enquiry${planLabel !== "Not specified" ? ` — ${planLabel}` : ""}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Plan: ${planLabel}`,
    `Hosting type: ${hostingType}`,
    repoUrl ? `Repository: ${repoUrl}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Plan:</strong> ${escapeHtml(planLabel)}</p>
    <p><strong>Hosting type:</strong> ${escapeHtml(hostingType)}</p>
    ${repoUrl ? `<p><strong>Repository:</strong> <a href="${escapeHtml(repoUrl)}">${escapeHtml(repoUrl)}</a></p>` : ""}
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
