import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { useContent } from "@/content";
import { COMPANIES } from "@/content/companies";
import { Eyebrow, GalaxyVeil, IconTile, Tag } from "@/components/ui";
import { cn } from "@/lib/cn";

function Terminal() {
  const t = useContent();
  const term = t.ai.terminal;
  const [sectionCount, setSectionCount] = useState<number | null>(null);

  // A számok a valós oldalból jönnek, így nem avulnak el, ha bővül a tartalom.
  useEffect(() => {
    setSectionCount(document.querySelectorAll("main > section").length);
  }, []);

  const fill = (line: string) =>
    line
      .replace("{companies}", String(Object.keys(COMPANIES).length))
      .replace("{sections}", sectionCount === null ? "…" : String(sectionCount));

  return (
    <div className="reveal overflow-hidden rounded-2xl border border-border bg-background/90 font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate text-xs text-muted-foreground">{term.title}</span>
      </div>
      <div className="space-y-2 p-5">
        <p className="text-foreground">
          <span className="text-primary">&gt;</span> {term.prompt}
        </p>
        <ul className="space-y-1.5 pt-2">
          {term.steps.map((step) => (
            <li key={step} className="flex gap-2 text-muted-foreground">
              <span className="text-nebula-lilac">●</span>
              <span>{fill(step)}</span>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 pt-2 text-primary">
          <Check className="h-4 w-4" aria-hidden />
          <span className="caret">{term.done}</span>
        </p>
      </div>
    </div>
  );
}

export function AiFirst() {
  const t = useContent();
  const ai = t.ai;

  return (
    <section id="ai" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card px-5 py-12 sm:px-8 md:px-12 md:py-16">
        <GalaxyVeil />

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="reveal">
            <Eyebrow>{ai.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {ai.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{ai.description}</p>
          </div>

          <div>
            <Terminal />
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              {ai.terminal.caption}
              <a
                href={t.links.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover"
              >
                <Github className="h-4 w-4" aria-hidden />
                {ai.terminal.captionLink}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ai.cards.map((card, i) => (
            <article
              key={card.title}
              className={cn(
                "reveal flex flex-col rounded-2xl border bg-background/70 p-6 backdrop-blur transition-colors",
                "highlight" in card && card.highlight
                  ? "border-primary/60 ring-1 ring-primary/30"
                  : "border-border hover:border-primary/40",
              )}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <IconTile icon={card.icon} />
              <h3 className="mt-5 text-lg font-bold text-foreground md:text-xl">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{card.text}</p>

              {"tags" in card && card.tags ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              ) : null}

              {"link" in card && card.link ? (
                <a
                  href={card.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  {card.link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
