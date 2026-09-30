import { useState } from "react";
import { Check, Copy, Linkedin, Mail, MapPin, Send, Github, ArrowUp } from "lucide-react";
import { useContent } from "@/content";
import { Eyebrow, GalaxyVeil } from "@/components/ui";
import { buttonClass } from "@/lib/cn";
import { Monogram } from "./Header";

export function Contact() {
  const t = useContent();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(t.links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // A vágólap nem mindenhol érhető el (pl. nem biztonságos környezetben); ilyenkor a mailto link marad.
    }
  }

  return (
    <section id="kapcsolat" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="reveal relative isolate overflow-hidden rounded-3xl border border-primary/40 bg-card px-6 py-12 md:px-12 md:py-16">
        <GalaxyVeil />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {c.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{c.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${t.links.email}`} className={buttonClass("primary", "lg")}>
                <Send className="h-4 w-4" aria-hidden />
                {c.primaryCta}
              </a>
              <a href={t.links.linkedin} target="_blank" rel="noreferrer noopener" className={buttonClass("outline", "lg")}>
                <Linkedin className="h-4 w-4" aria-hidden />
                {c.linkedinLabel}
              </a>
            </div>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.emailLabel}</p>
                <a href={`mailto:${t.links.email}`} className="block truncate font-semibold text-foreground hover:text-primary">
                  {t.links.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? c.copied : c.copy}
              </button>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.linkedinLabel}</p>
                <a href={t.links.linkedin} target="_blank" rel="noreferrer noopener" className="font-semibold text-foreground hover:text-primary">
                  {c.linkedinValue}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.locationLabel}</p>
                <p className="font-semibold text-foreground">{c.locationValue}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const t = useContent();
  const f = t.footer;
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-6">
        <div className="flex items-center gap-3">
          <Monogram className="h-8 w-8 text-xs" />
          <span>
            © {new Date().getFullYear()} {f.rights}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span>{f.builtWith}</span>
          <a href={t.links.repo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-primary">
            <Github className="h-4 w-4" aria-hidden />
            {f.source}
          </a>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-primary">
            <ArrowUp className="h-4 w-4" aria-hidden />
            {f.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
