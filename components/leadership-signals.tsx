import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

export function LeadershipSignals() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="How I lead"
        title="Leadership isn't a title change — it's already the job"
        description="Three examples of owning outcomes beyond my own code."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {profile.leadership.map((signal, i) => (
          <div
            key={signal.title}
            className="animate-fade-up group relative overflow-hidden rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/50"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {signal.tag}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{signal.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
