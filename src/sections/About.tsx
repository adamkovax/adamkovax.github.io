import { useContent } from "@/content";
import { Eyebrow, GalaxyVeil, Section } from "@/components/ui";

export function About() {
  const t = useContent();
  const a = t.about;

  return (
    <Section id="rolam">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div className="reveal">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
            {a.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="reveal relative isolate h-fit overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8">
          <GalaxyVeil className="opacity-60" />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{a.factsTitle}</p>
          <dl className="mt-5 space-y-5">
            {a.facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground md:text-base">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
