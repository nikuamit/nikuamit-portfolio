"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const response = await fetch(profile.contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description={profile.status}
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-border bg-background-elevated p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-muted">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          {status === "success" ? (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — your message has been sent.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again or reach out on LinkedIn.
            </p>
          ) : null}
        </form>

        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-background-elevated p-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Elsewhere
            </h3>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-background"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.02-4.12 2.06 2.06 0 01-.02 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
              LinkedIn — {profile.name}
            </a>
          </div>
          <p className="text-sm leading-relaxed text-muted">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
