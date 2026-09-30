export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Az AIFM oldal gombjainak megfelelője, shadcn nélkül.
export function buttonClass(variant: "primary" | "outline" = "primary", size: "md" | "lg" = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm",
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-hover"
      : "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-muted",
  );
}
