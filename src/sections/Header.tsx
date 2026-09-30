import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useContent } from "@/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { buttonClass, cn } from "@/lib/cn";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/50 bg-card text-sm font-extrabold tracking-tight text-foreground",
        className,
      )}
    >
      <span>
        K<span className="text-primary">Á</span>
      </span>
    </span>
  );
}

export function Header() {
  const t = useContent();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Monogram />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold text-foreground">{t.hero.name}</span>
            <span className="mt-1 text-[11px] font-medium text-muted-foreground">{t.brandTagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Fő navigáció">
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                active === item.id ? "text-primary" : "text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#kapcsolat" className={cn(buttonClass("primary"), "hidden sm:inline-flex")}>
            {t.navCta}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menuLabel}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-background px-4 pb-4 lg:hidden" aria-label="Mobil navigáció">
          <ul className="flex flex-col py-2">
            {[...t.nav, { id: "kapcsolat", label: t.navCta }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-2 py-3 text-base font-medium hover:text-primary",
                    active === item.id ? "text-primary" : "text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

// A menüpontok azonosítói nyelvtől függetlenek, ezért elég egyszer, modulszinten.
const NAV_IDS = ["rolam", "delivery", "ai", "tapasztalat", "ugyfelek", "minositesek", "kapcsolat"] as const;
