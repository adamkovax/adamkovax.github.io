import { useContent } from "@/content";
import { COMPANIES } from "@/content/companies";
import { CompanyLogo, Section, SectionHeading } from "@/components/ui";

export function Clients() {
  const t = useContent();
  const c = t.clients;

  return (
    <Section id="ugyfelek">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} className="reveal" />

      <ul className="reveal mt-12 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-7">
        {c.ids.map((id) => (
          <li
            key={id}
            className="group flex h-20 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 md:h-24 md:px-4 transition-colors hover:border-primary/40"
          >
            <CompanyLogo id={id} className="opacity-70 transition-opacity group-hover:opacity-100" />
            <span className="sr-only">{COMPANIES[id].name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
