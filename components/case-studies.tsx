"use client";

import { useState } from "react";
import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

const ROWS: { key: keyof (typeof profile.caseStudies)[number]; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "architecture", label: "Architecture" },
  { key: "role", label: "My role" },
  { key: "outcome", label: "Outcome" },
];

export function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Selected work, in depth"
        description="Problem, architecture, my role and outcome for four representative engagements."
      />
      <div className="space-y-3">
        {profile.caseStudies.map((study, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={study.title}
              className="overflow-hidden rounded-2xl border border-border bg-background-elevated"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-medium sm:text-lg">{study.title}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-5 border-t border-border px-6 py-6 sm:grid-cols-2">
                    {ROWS.map((row) => (
                      <div key={row.key}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                          {row.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                          {study[row.key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
