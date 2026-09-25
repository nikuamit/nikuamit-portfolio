import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="transition-colors hover:text-foreground"
        >
          linkedin.com/in/aks1993
        </a>
      </div>
    </footer>
  );
}
