"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { plans, getPlanById } from "@/lib/plans";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (planParam && getPlanById(planParam)) {
      setPlan(planParam);
    }
  }, [planParam]);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!message.trim()) {
      next.message = "Message is required";
    } else if (message.trim().length < 10) {
      next.message = "Message must be at least 10 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          plan: plan || "Not specified",
          message,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        errors?: Record<string, string>;
        error?: string;
      };

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setPlan("");
        return;
      }

      if (response.status === 400 && data.errors) {
        setErrors(data.errors);
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center"
        role="status"
      >
        <p className="text-lg font-bold text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
            errors.name && "border-red-500/50",
          )}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
            errors.email && "border-red-500/50",
          )}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="plan" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Plan (optional)
        </label>
        <select
          id="plan"
          name="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="">Not sure yet</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — €{p.priceAnnual}/mo
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project, current hosting, and timeline."
          className={cn(
            "w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
            errors.message && "border-red-500/50",
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong. Check your connection or try again later.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-gradient-accent py-3.5 font-bold text-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
