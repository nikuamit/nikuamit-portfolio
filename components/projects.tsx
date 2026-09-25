import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Projects" title="Independent work" />
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/50"
          >
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <p className="mt-4 truncate text-xs font-medium text-accent">
              {project.url.replace(/^https?:\/\//, "")}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
