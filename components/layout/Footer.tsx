import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const find = (label: string) => socialLinks.find((s) => s.label === label);

  const icons = [
    { label: "GitHub", icon: Github, href: find("GitHub")?.href },
    { label: "LinkedIn", icon: Linkedin, href: find("LinkedIn")?.href },
    { label: "Email", icon: Mail, href: find("Email")?.href },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">{siteConfig.name}</div>
            <div className="mt-1 text-sm text-ink-muted">{siteConfig.role}</div>
          </div>
          <div className="flex items-center gap-3">
            {icons.map(({ label, icon: Icon, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-white/25 hover:text-ink-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ) : null,
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>Built with care — {siteConfig.tagline}.</span>
        </div>
      </div>
    </footer>
  );
}