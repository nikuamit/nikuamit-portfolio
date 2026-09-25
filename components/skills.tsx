import { profile } from "@/lib/profile";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Skills" title="Toolbox" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-background-elevated p-6"
          >
            <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
