import { ArrowRight, Linkedin } from "lucide-react";
import { useContent } from "@/content";
import { HeroBackground } from "@/components/HeroBackground";
import { buttonClass, cn } from "@/lib/cn";

// A lebegő címkék helye a portré körül, a címkék sorrendjében.
const FLOAT_POSITIONS = ["-left-3 top-8", "-right-3 bottom-20", "left-6 -bottom-4"];

export function Hero() {
  const t = useContent();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 pb-12 pt-14 md:px-6 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pb-16 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {h.badge}
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {h.name}
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-foreground md:text-2xl">
            {h.leadBefore}
            <span className="text-primary">{h.leadHighlight}</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{h.body}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kapcsolat" className={buttonClass("primary", "lg")}>
              {h.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={t.links.linkedin} target="_blank" rel="noreferrer noopener" className={buttonClass("outline", "lg")}>
              <Linkedin className="h-4 w-4" />
              {h.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" aria-hidden />
          <div className="absolute -inset-10 translate-x-6 rounded-full bg-nebula/15 blur-3xl" aria-hidden />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/40 bg-card ring-4 ring-card">
            <picture>
              <source srcSet="/portrait.webp" type="image/webp" />
              <img
                src="/portrait.jpg"
                alt={h.photoAlt}
                width={800}
                height={800}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </picture>
          </div>

          {h.floating.map((label, i) => (
            <span
              key={label}
              className={cn(
                "absolute hidden items-center gap-2 rounded-full border border-primary/40 bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg shadow-black/40 backdrop-blur sm:inline-flex",
                FLOAT_POSITIONS[i],
              )}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <dl className="reveal grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur md:grid-cols-4">
          {t.stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "p-5 md:p-7",
                i % 2 === 1 && "border-l border-border",
                i >= 2 && "border-t border-border md:border-t-0",
                i === 2 && "md:border-l",
              )}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight text-primary md:text-4xl">{s.value}</span>
                <span className="mt-2 block text-sm leading-snug text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
