import { getHostingTypeLabel, hostingTypes } from "@/lib/contact-options";

export interface ContactPayload {
  name: string;
  email: string;
  plan: string;
  hostingType: string;
  repoUrl: string;
  message: string;
}

export interface ContactValidationResult {
  ok: true;
  data: ContactPayload;
}

export interface ContactValidationError {
  ok: false;
  errors: Record<string, string>;
}

const validHostingIds = new Set<string>(hostingTypes.map((t) => t.id));

export function validateContactBody(
  body: unknown,
  options?: { honeypot?: string },
): ContactValidationResult | ContactValidationError {
  if (options?.honeypot?.trim()) {
    return { ok: false, errors: { form: "Invalid request" } };
  }

  if (!body || typeof body !== "object") {
    return { ok: false, errors: { form: "Invalid request" } };
  }

  const { name, email, plan, hostingType, repoUrl, message } = body as Record<
    string,
    unknown
  >;
  const errors: Record<string, string> = {};

  if (typeof name !== "string" || !name.trim()) {
    errors.name = "Name is required";
  }
  if (typeof email !== "string" || !email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }
  if (typeof message !== "string" || !message.trim()) {
    errors.message = "Message is required";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  const repoValue = typeof repoUrl === "string" ? repoUrl.trim() : "";
  if (repoValue && !/^https?:\/\/.+/i.test(repoValue)) {
    errors.repoUrl = "Enter a valid URL starting with http:// or https://";
  }

  const hostingValue =
    typeof hostingType === "string" && validHostingIds.has(hostingType)
      ? hostingType
      : "";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const planValue =
    typeof plan === "string" && plan.trim() ? plan.trim() : "Not specified";

  return {
    ok: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      plan: planValue,
      hostingType: getHostingTypeLabel(hostingValue),
      repoUrl: repoValue,
      message: (message as string).trim(),
    },
  };
}
