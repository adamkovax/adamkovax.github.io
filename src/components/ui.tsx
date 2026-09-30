import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { COMPANIES, type CompanyId, type LogoSize } from "@/content/companies";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary",
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24", className)}>
      {children}
    </section>
  );
}

export function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/40 bg-background text-primary",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}

/**
 * A "tejút" réteg: lila köd és porszemek. Csak dekoráció, a szülőnek
 * `relative isolate` kell, hogy a -z-10 a kártya háttere fölé, a szöveg alá kerüljön.
 */
export function GalaxyVeil({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="galaxy-clouds-card absolute inset-0" />
      <div className="galaxy-dust absolute inset-0" />
    </div>
  );
}

const LOGO_HEIGHT: Record<LogoSize, string> = {
  sm: "h-4 md:h-5",
  md: "h-6 md:h-7",
  lg: "h-8 md:h-9",
  xl: "h-10 md:h-12",
};

/** Céglogó fehér sziluettként. Ha nincs logófájl, a cég neve jelenik meg. */
export function CompanyLogo({ id, className }: { id: CompanyId; className?: string }) {
  const company = COMPANIES[id];
  if (!company.logo) {
    return <span className={cn("text-sm font-bold text-foreground", className)}>{company.name}</span>;
  }
  return (
    <img
      src={company.logo}
      alt={company.name}
      title={company.name}
      loading="lazy"
      className={cn(
        company.treatment === "knockout" ? "logo-knockout" : "logo-mono",
        "w-auto max-w-full object-contain",
        LOGO_HEIGHT[company.size ?? "md"],
        className,
      )}
    />
  );
}
