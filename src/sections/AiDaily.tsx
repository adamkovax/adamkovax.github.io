import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useContent } from "@/content";
import { IconTile, Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Terminál-kártya fülekkel: néhány PM-feladat, ahogy Claude Code-dal készül. */
function Terminal() {
  const t = useContent();
  const term = t.aiDaily.terminal;
  const [active, setActive] = useState(0);
  const example = term.examples[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background/90 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate text-xs text-muted-foreground">{term.title}</span>
      </div>

      <div role="tablist" aria-label={term.tabsLabel} className="flex flex-wrap gap-1 border-b border-border px-3 py-2">
        {term.examples.map((ex, i) => (
          <button
            key={ex.tab}
            type="button"
            role="tab"
            id={`term-tab-${i}`}
            aria-selected={i === active}
            aria-controls="term-panel"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-md px-2.5 py-1 font-sans text-xs font-semibold transition-colors",
              i === active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {ex.tab}
          </button>
        ))}
      </div>

      {/* Fix magasság, hogy a fülváltás ne ugrassa az oldalt. */}
      <div
        key={active}
        id="term-panel"
        role="tabpanel"
        aria-labelledby={`term-tab-${active}`}
        className="min-h-[15.5rem] space-y-2 p-5"
      >
        <p className="text-foreground">
          <span className="text-primary">&gt;</span> {example.prompt}
        </p>
        <ul className="space-y-1.5 pt-2">
          {example.steps.map((step) => (
            <li key={step} className="flex gap-2 text-muted-foreground">
              <span className="text-nebula-lilac">●</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 pt-2 text-primary">
          <Check className="h-4 w-4 shrink-0" aria-hidden />
          <span className="caret">{example.done}</span>
        </p>
      </div>
    </div>
  );
}

/** A saját PM-munkában használt AI: konkrét, ismétlődő feladatok. */
export function AiDaily() {
  const t = useContent();
  const d = t.aiDaily;
  const np = d.nonprofit;

  return (
    <Section id="ai-munkaban">
      <SectionHeading eyebrow={d.eyebrow} title={d.title} description={d.description} className="reveal" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <ul className="reveal divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {d.useCases.map((u) => (
            <li key={u.title} className="flex gap-4 p-5 md:p-6">
              <IconTile icon={u.icon} className="h-10 w-10" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-bold text-foreground md:text-lg">{u.title}</h3>
                  <ul className="flex flex-wrap gap-1.5 sm:justify-end">
                    {u.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{u.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="reveal flex flex-col gap-6">
          <div>
            <Terminal />
            <p className="mt-3 text-sm text-muted-foreground">{d.terminal.caption}</p>
          </div>

          <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
            <IconTile icon={np.icon} />
            <h3 className="mt-5 text-lg font-bold text-foreground md:text-xl">{np.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{np.text}</p>
            <a
              href={np.link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              {np.link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </article>
        </div>
      </div>
    </Section>
  );
}
