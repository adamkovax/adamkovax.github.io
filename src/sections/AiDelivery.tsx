import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/content";
import { CompanyLogo, Eyebrow, GalaxyVeil, IconTile, Tag } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Ügyfeleknél végzett AI-munka: bevezetés, tanácsadás, PoC, termékfejlesztés. */
export function AiDelivery() {
  const t = useContent();
  const ai = t.aiDelivery;

  return (
    <section id="ai" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card px-5 py-12 sm:px-8 md:px-12 md:py-16">
        <GalaxyVeil />

        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="reveal">
            <Eyebrow>{ai.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {ai.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{ai.description}</p>
          </div>

          <dl className="reveal grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-background/70 backdrop-blur">
            {ai.stats.map((s, i) => (
              <div key={s.label} className={cn("p-4 md:p-5", i > 0 && "border-l border-border")}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block whitespace-nowrap text-xl font-extrabold tracking-tight text-primary md:text-2xl">{s.value}</span>
                  <span className="mt-1.5 block text-xs leading-snug text-muted-foreground md:text-sm">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ai.cards.map((card, i) => {
            const highlight = "highlight" in card && card.highlight;
            return (
              <article
                key={card.title}
                className={cn(
                  "reveal flex flex-col rounded-2xl border bg-background/70 p-6 backdrop-blur transition-colors",
                  highlight ? "border-primary/60 ring-1 ring-primary/30" : "border-border hover:border-primary/40",
                )}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <IconTile icon={card.icon} />
                  {"logo" in card && card.logo ? <CompanyLogo id={card.logo} className="opacity-80" /> : null}
                </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
