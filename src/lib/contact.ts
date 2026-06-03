export interface ContactPayload {
  name: string;
  email: string;
  plan: string;
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

export function validateContactBody(
  body: unknown,
): ContactValidationResult | ContactValidationError {
  if (!body || typeof body !== "object") {
    return { ok: false, errors: { form: "Invalid request" } };
  }

  const { name, email, plan, message } = body as Record<string, unknown>;
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
      message: (message as string).trim(),
    },
  };
}
