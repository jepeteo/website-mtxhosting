import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactBody } from "@/lib/contact";
import { getPlanById } from "@/lib/plans";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? "MTX Hosting <hosting@ops.mtxstudio.com>";
const toEmail =
  process.env.CONTACT_TO_EMAIL ?? "hosting@ops.mtxstudio.com";

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = validateContactBody(body);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const { name, email, plan, message } = result.data;
  const planLabel = getPlanById(plan)?.name ?? plan;

  const subject = `MTX Hosting enquiry${planLabel !== "Not specified" ? ` — ${planLabel}` : ""}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Plan: ${planLabel}`,
    "",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Plan:</strong> ${escapeHtml(planLabel)}</p>
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
