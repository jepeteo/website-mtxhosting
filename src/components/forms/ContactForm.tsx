"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { plans, getPlanById } from "@/lib/plans";
import { hostingTypes } from "@/lib/contact-options";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") ?? "";
  const typeParam = searchParams.get("type") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [hostingType, setHostingType] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (planParam && getPlanById(planParam)) {
      setPlan(planParam);
    }
    if (typeParam && hostingTypes.some((t) => t.id === typeParam)) {
      setHostingType(typeParam);
    }
  }, [planParam, typeParam]);

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
    if (repoUrl.trim() && !/^https?:\/\/.+/i.test(repoUrl.trim())) {
      next.repoUrl = "Enter a valid URL starting with http:// or https://";
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
          hostingType,
          repoUrl: repoUrl.trim(),
          message,
          company,
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
        setHostingType("");
        setRepoUrl("");
        setCompany("");
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
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

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
        <label htmlFor="hostingType" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Hosting type (optional)
        </label>
        <select
          id="hostingType"
          name="hostingType"
          value={hostingType}
          onChange={(e) => setHostingType(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          {hostingTypes.map((t) => (
            <option key={t.id || "unset"} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
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
        <label htmlFor="repoUrl" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
          Repository URL (optional)
        </label>
        <input
          id="repoUrl"
          name="repoUrl"
          type="url"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="https://github.com/org/project"
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
            errors.repoUrl && "border-red-500/50",
          )}
        />
        {errors.repoUrl && (
          <p className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.repoUrl}
          </p>
        )}
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
