import { BarChart3 } from "lucide-react";
import { useContent } from "@/content";
import { Section, SectionHeading } from "@/components/ui";

export function Delivery() {
  const t = useContent();
  const d = t.delivery;

  return (
    <Section id="delivery">
      <SectionHeading eyebrow={d.eyebrow} title={d.title} description={d.description} className="reveal" />

      <ol className="relative mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
        {/* Az összekötő vonal: nagy képernyőn vízszintes, a lépések ikonjain fut át. */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 lg:block"
        />
        {d.steps.map(({ icon: Icon, title, text, with: partners }, i) => (
          <li
            key={title}
            className="reveal relative flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 lg:flex-col lg:gap-0 lg:p-5"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/50 bg-background text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="hidden font-mono text-xs font-medium text-primary/80 lg:mt-4 lg:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="text-base font-bold text-foreground lg:mt-1">
                <span className="mr-2 font-mono text-xs font-medium text-primary/80 lg:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              {/* Kivel dolgozik együtt ebben a szakaszban: nagy képernyőn a kártya aljára igazítva. */}
              <div className="mt-3 lg:mt-auto lg:pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {d.withLabel}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {partners.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="reveal mt-6 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5 md:items-center">
        <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-primary md:mt-0" aria-hidden />
        <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{d.footnote}</p>
      </div>
    </Section>
  );
}
