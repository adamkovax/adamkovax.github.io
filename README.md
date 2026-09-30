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

Minden `main`-re pusholt commit után a GitHub Actions lebuildeli az oldalt és kiteszi GitHub Pagesre ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). Kb. 1 perc, amíg a változás élesben megjelenik.
