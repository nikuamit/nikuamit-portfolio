import Link from "next/link";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="bg-radial-fade absolute inset-x-0 top-0 h-[560px]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28">
        <div
          className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-3.5 py-1.5 text-xs font-medium text-muted"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available immediately
        </div>

        <h1
          className="animate-fade-up max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-fade-up mt-4 max-w-2xl text-lg font-medium text-foreground/80 sm:text-xl"
          style={{ animationDelay: "140ms" }}
        >
          {profile.headline} · {profile.headlineDetail}
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          {profile.summary}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "260ms" }}
        >
          <Link
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background-elevated"
          >
            LinkedIn
          </a>
          <span className="text-sm text-muted">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
