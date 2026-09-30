import { useContent } from "@/content";
import { Section, SectionHeading } from "@/components/ui";

export function Credentials() {
  const t = useContent();
  const c = t.credentials;

  return (
    <Section id="minositesek">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} className="reveal" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.certsTitle}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.certs.map(({ icon: Icon, title, subtitle }, i) => (
              <li
                key={title}
                className={
                  "flex items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40 " +
                  (i === 0 ? "border-primary/50" : "border-border")
                }
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold leading-snug text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.awsNote}</p>
        </div>

        <div className="reveal">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.educationTitle}</h3>
          <ul className="mt-4 space-y-3">
            {c.education.map(({ icon: Icon, title, subtitle, period }) => (
              <li key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-bold leading-snug text-foreground">{title}</p>
                    <p className="font-mono text-xs text-primary">{period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
