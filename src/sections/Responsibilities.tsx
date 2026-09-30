import { useContent } from "@/content";
import { GalaxyVeil, IconTile, Section, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Responsibilities() {
  const t = useContent();
  const r = t.responsibilities;

  return (
    <Section id="felelossegek">
      <SectionHeading eyebrow={r.eyebrow} title={r.title} className="reveal" />

      {/* Bento: a kiemelt kártya nagy képernyőn két sor magas. */}
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {r.items.map((item, i) => {
          const highlight = "highlight" in item && item.highlight;
          return (
            <article
              key={item.title}
              className={cn(
                "reveal relative isolate flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors md:p-7",
                highlight
                  ? "border-primary/60 ring-1 ring-primary/30 md:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "border-border hover:border-primary/40",
              )}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              {highlight ? <GalaxyVeil /> : null}
              <IconTile icon={item.icon} />
              <h3 className={cn("mt-5 font-bold text-foreground", highlight ? "text-2xl md:text-3xl" : "text-lg md:text-xl")}>
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{item.subtitle}</p>
              <ul className={cn("mt-4 space-y-2", highlight && "lg:mt-6 lg:space-y-3")}>
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
