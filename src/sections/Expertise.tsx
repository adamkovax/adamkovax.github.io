import { useContent } from "@/content";
import { Section, SectionHeading } from "@/components/ui";

export function Expertise() {
  const t = useContent();
  const x = t.expertise;

  return (
    <Section id="teruletek" className="pt-4 md:pt-8">
      <SectionHeading eyebrow={x.eyebrow} title={x.title} className="reveal" />

      <ul className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {x.items.map(({ icon: Icon, title, note }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 md:p-5"
          >
            <Icon className="h-5 w-5 text-primary" aria-hidden />
            <div>
              <p className="text-sm font-bold text-foreground md:text-base">{title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">{note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
