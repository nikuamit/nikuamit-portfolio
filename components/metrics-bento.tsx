import { profile } from "@/lib/profile";

export function MetricsBento() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {profile.metrics.map((metric, i) => (
          <div
            key={metric.label}
            className="animate-fade-up group relative overflow-hidden rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/50"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
              aria-hidden="true"
            />
            <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
