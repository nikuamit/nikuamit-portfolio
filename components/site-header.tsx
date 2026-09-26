import Link from "next/link";
import { profile } from "@/lib/profile";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#leadership", label: "Leadership" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
