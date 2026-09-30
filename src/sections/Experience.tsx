import { useContent } from "@/content";
import { CompanyLogo, Section, SectionHeading, Tag } from "@/components/ui";
import { COMPANIES } from "@/content/companies";

export function Experience() {
  const t = useContent();
  const e = t.experience;

  return (
    <Section id="tapasztalat">
      <SectionHeading eyebrow={e.eyebrow} title={e.title} description={e.description} className="reveal" />

      <ol className="relative mt-12 space-y-6 md:mt-16">
        {/* Az idővonal gerince. */}
        <span
          aria-hidden
          className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-primary/60 via-border to-border md:left-[calc(12rem+19px)]"
        />

        {e.items.map((item, i) => {
          const company = COMPANIES[item.company];
          return (
            <li key={item.companyLabel} className="reveal relative grid gap-4 md:grid-cols-[12rem_1fr] md:gap-0">
              {/* Időszak, nagy képernyőn a gerinc bal oldalán. */}
              <div className="hidden pr-10 pt-7 text-right md:block">
                <p className="text-sm font-semibold text-foreground">{item.period}</p>
              </div>

              <div className="relative pl-14 md:pl-14">
                <span
                  aria-hidden
                  className={
                    "absolute left-[12px] top-8 h-4 w-4 rounded-full border-2 border-background " +
                    (i === 0 ? "bg-primary shadow-[0_0_0_4px_rgb(16_229_160/0.2)]" : "bg-muted-foreground/60")
                  }
                />

                <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8">
                  <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary md:hidden">{item.period}</p>
                      <h3 className="mt-1 text-xl font-extrabold text-foreground md:mt-0 md:text-2xl">
                        {item.companyLabel}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-foreground/80 md:text-base">{item.role}</p>
                    </div>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="grid h-14 w-28 shrink-0 place-items-center rounded-xl border border-border bg-background px-3 opacity-80 transition-opacity hover:opacity-100"
                    >
                      <CompanyLogo id={item.company} className="max-h-9" />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{item.summary}</p>

                  <ul className="mt-4 space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
