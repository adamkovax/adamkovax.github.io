// Cégek és logók, nyelvtől független adat. A logók a public/logos mappában vannak,
// és egységesen fehér sziluettként jelennek meg a sötét alapon. Két kezelés van:
// - "mono": sima logó átlátszó alapon, az egész fehér lesz (.logo-mono)
// - "knockout": kitöltött forma fehér betűkkel (pl. Praktiker-doboz); ezt
//   invertáljuk és a háttérbe olvasztjuk, így a betűk kivágásként látszanak
//   (.logo-knockout). Monóval ezek fehér foltként jelennének meg.
// A `size` a logó arányához igazított magasság, hogy optikailag egyforma súlyúak legyenek.

export type LogoSize = "sm" | "md" | "lg" | "xl";
export type LogoTreatment = "mono" | "knockout";

export interface Company {
  name: string;
  logo?: string;
  size?: LogoSize;
  treatment?: LogoTreatment;
  url?: string;
}

const companies = {
  kpmg: { name: "KPMG", logo: "/logos/kpmg.svg", size: "md", url: "https://kpmg.com/hu" },
  mikrum: { name: "Mikrum Enterprise IT", logo: "/logos/mikrum.png", size: "md", url: "https://www.mikrum.hu" },
  cheppers: { name: "Cheppers USA", logo: "/logos/cheppers.svg", size: "md", url: "https://cheppers.com" },
  devertix: { name: "Devertix", logo: "/logos/devertix.png", size: "xl", treatment: "knockout", url: "https://devertix.hu" },

  mbh: { name: "MBH Bank", logo: "/logos/mbh.svg", size: "md" },
  praktiker: { name: "Praktiker", logo: "/logos/praktiker.svg", size: "md", treatment: "knockout" },
  ey: { name: "EY", logo: "/logos/ey.svg", size: "xl" },
  whb: { name: "WHB Group", logo: "/logos/whb.svg", size: "md" },
  profession: { name: "Profession.hu", logo: "/logos/profession.png", size: "md" },
  unitedway: { name: "United Way", logo: "/logos/unitedway.svg", size: "lg", treatment: "knockout" },
  float: { name: "Float", logo: "/logos/float.svg", size: "md" },
  antenna: { name: "Antenna Group", logo: "/logos/antenna.svg", size: "md" },
  sony: { name: "Sony", logo: "/logos/sony.svg", size: "sm" },
  mavir: { name: "MAVIR", logo: "/logos/mavir.png", size: "xl" },
  erste: { name: "Erste Bank", logo: "/logos/erste.svg", size: "md" },
  mvm: { name: "MVM", logo: "/logos/mvm.png", size: "md" },
  aegon: { name: "Aegon", logo: "/logos/aegon.svg", size: "md", treatment: "knockout" },
} satisfies Record<string, Company>;

export type CompanyId = keyof typeof companies;
export const COMPANIES: Record<CompanyId, Company> = companies;
