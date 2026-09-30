# Kovács Ádám · bemutatkozó oldal

Személyes CV- és bemutatkozó oldal: **https://adamkovax.github.io**

Vite + React + TypeScript + Tailwind CSS, a színvilág az [AI First Mentors](https://aifirstmentors.com) oldaléval azonos. Claude Code-dal készült.

## Tartalom szerkesztése

Minden szöveg egy helyen van: [`src/content/hu.ts`](src/content/hu.ts). Új munkahely, projekt, minősítés vagy ügyfél felvételéhez elég ezt a fájlt módosítani, a komponensekhez nem kell nyúlni.

- **Céglogók:** [`src/content/companies.ts`](src/content/companies.ts) és a `public/logos` mappa. A logók fehér sziluettként jelennek meg. Ha egy logónak kitöltött háttérformája van (pl. doboz fehér betűkkel), a `treatment: "knockout"` kell hozzá, különben fehér foltként látszik.
- **Portré:** `public/portrait.jpg` és `public/portrait.webp` (800×800).
- **Megosztási kép (LinkedIn, e-mail előnézet):** `public/og-image.jpg` (1200×630).

Stílusszabály a szövegekhez: nincs gondolatjeles közbevetés; helyette kettőspont, zárójel vagy külön mondat.

## Nyelvváltás (később)

A komponensek a `Content` típusból dolgoznak ([`src/content/index.tsx`](src/content/index.tsx)). Az angol változathoz egy ugyanilyen szerkezetű `en.ts` kell, és egy nyelvválasztó a `ContentProvider`-ben.

## Futtatás helyben

```bash
bun install
bun run dev
```

## Élesítés

```bash
bun run deploy
```

Lebuildeli az oldalt, és a `dist` tartalmát feltölti a `gh-pages` branchre, amiről a GitHub Pages kiszolgálja. Kb. 1 perc, amíg a változás élesben megjelenik. A forráskód változtatásait ettől függetlenül a `main`-re kell pusholni.

Automatikus élesítés (GitHub Actions) akkor lehetséges, ha a gépen lévő `gh` bejelentkezés `workflow` jogosultságot kap: `gh auth refresh -h github.com -s workflow`.
