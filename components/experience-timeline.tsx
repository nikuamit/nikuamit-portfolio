import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="9+ years across pharma, SaaS and IoT"
        description="Reverse-chronological, including a planned career break spent upskilling."
      />
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {profile.experience.map((entry) => (
          <li key={`${entry.company}-${entry.dates}`} className="relative">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent sm:-left-[calc(2.5rem+5px)]"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{entry.company}</h3>
              <span className="text-sm font-medium text-muted">{entry.dates}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent">{entry.title}</p>
            <p className="mt-0.5 text-sm text-muted">
              {entry.industry} · {entry.location}
            </p>
            <ul className="mt-3 space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-2xl border border-border bg-background-elevated p-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Education</h3>
        <div className="mt-4 space-y-4">
          {profile.education.map((ed) => (
            <div key={ed.institution} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="text-sm font-medium">{ed.institution}</p>
                <p className="text-sm text-muted">{ed.detail}</p>
                {ed.extra ? <p className="text-sm text-muted">{ed.extra}</p> : null}
              </div>
              <span className="text-sm text-muted">{ed.dates}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
