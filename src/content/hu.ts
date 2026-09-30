import {
  Award,
  BadgeCheck,
  Bot,
  Building2,
  CalendarRange,
  Cloud,
  CloudCog,
  Code2,
  FileSignature,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Languages,
  LayoutTemplate,
  Mic,
  MonitorSmartphone,
  Palette,
  Presentation,
  Receipt,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Handshake,
  KanbanSquare,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import type { CompanyId } from "./companies";

// Minden magyar szöveg ebben a fájlban van. Az angol változathoz elég egy
// ugyanilyen szerkezetű en.ts, a komponensek a `Content` típusból dolgoznak.
//
// Stílusszabály: nincs gondolatjeles közbevetés a szövegben. Ahol magyarázat
// kell, kettőspont, zárójel vagy külön mondat.

const EMAIL = "adam.kovx@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/%C3%A1d%C3%A1m-kov%C3%A1cs-pmp-1a7563b0/";
const REPO = "https://github.com/adamkovax/adamkovax.github.io";

export const hu = {
  lang: "hu",

  links: { email: EMAIL, linkedin: LINKEDIN, repo: REPO },

  nav: [
    { id: "rolam", label: "Rólam" },
    { id: "delivery", label: "Delivery" },
    { id: "ai", label: "AI" },
    { id: "tapasztalat", label: "Tapasztalat" },
    { id: "ugyfelek", label: "Ügyfelek" },
    { id: "minositesek", label: "Minősítések" },
  ],
  navCta: "Kapcsolat",
  brandTagline: "Delivery · AI · AWS",
  menuLabel: "Menü",

  hero: {
    badge: "PMP · Accredited Scrum Master · AWS partner",
    name: "Kovács Ádám",
    leadBefore: "Delivery- és projektvezető vagyok. A projektet az első megbeszéléstől a számlázásig viszem, ",
    leadHighlight: "AI-first szemlélettel.",
    body: "Több mint 8 év technológiai projekt- és ügyfélmenedzsment a KPMG-nél, szoftverfejlesztő és AWS felhőcégeknél. Az AI-t nem csak ajánlom: minden nap ezzel dolgozom.",
    primaryCta: "Írj nekem",
    secondaryCta: "LinkedIn-profil",
    photoAlt: "Kovács Ádám portréja",
    floating: ["Claude Code", "AWS GenAI kompetencia", "JIRA"],
  },

  stats: [
    { value: "8+", label: "év technológiai projekt- és ügyfélmenedzsment" },
    { value: "11+", label: "AWS partnerminősítés, köztük a GenAI kompetencia" },
    { value: "30", label: "weboldal migrálva AWS-re egyetlen projektben" },
    { value: "2", label: "zöldmezős JIRA-bevezetés a nulláról" },
  ],

  about: {
    eyebrow: "Rólam",
    title: "Nem csak projektet menedzselek. A teljes delivery-t viszem.",
    paragraphs: [
      "A KPMG-nél öt év alatt komplex rendszerbevezetéseken dolgoztam, főleg banki, biztosítói, energetikai és kereskedelmi ügyfeleknél. Ezután szoftverfejlesztési és AWS felhőprojekteket vezettem, bevezettem az SDLC-folyamatot és az agilis működést, és két cégnél is a nulláról építettem fel a JIRA-t.",
      "Ma a delivery teljes ívét koordinálom: a pre-sales beszélgetéstől és a cégbemutatótól az ajánlatadáson, a tervezésen és a megvalósításon át a teljesítésigazolásig és a számlázásig. Közben felelek az ügyfél-elégedettségért és a cég AWS-partnerkapcsolatáért is.",
      "Az AI nálam munkaeszköz, nem kísérlet. Claude Code-dal agenteket építek, amelyek a JIRA-ban, a HubSpotban, az ajánlatkészítésben és a marketingben dolgoznak, és ugyanezt a szemléletet adom tovább nonprofit alapon az AI First Mentors közösségben.",
    ],
    factsTitle: "Röviden",
    facts: [
      { icon: Building2, label: "Bázis", value: "Budapest" },
      { icon: Languages, label: "Nyelvek", value: "Magyar, angol (B2/C1)" },
      { icon: GraduationCap, label: "Végzettség", value: "Gazdaságinformatikus BSc" },
      { icon: KanbanSquare, label: "Módszertan", value: "PMP, Scrum, Kanban" },
      { icon: Workflow, label: "Eszközök", value: "JIRA, HubSpot, Miro, Claude Code, AWS" },
    ],
  },

  delivery: {
    eyebrow: "A teljes delivery egy kézben",
    title: "Az első megbeszéléstől az utolsó számláig.",
    description:
      "Nálam nincs átadás-átvétel a sales, a delivery és a pénzügy között: ugyanaz az ember felel az ügyfélért az első bemutatótól a havi elszámolásig.",
    steps: [
      {
        icon: Presentation,
        title: "Pre-sales",
        text: "Cégbemutató, igényfelmérés és az első ügyfélmegbeszélések a sales csapattal.",
      },
      {
        icon: FileSignature,
        title: "Ajánlatadás",
        text: "Becslés, ajánlat és szerződés előkészítése, tenderekben is.",
      },
      {
        icon: CalendarRange,
        title: "Tervezés",
        text: "Ütemterv, resource planning és a megfelelő csapat összeállítása.",
      },
      {
        icon: Rocket,
        title: "Megvalósítás",
        text: "Projektvezetés PMP és Scrum alapokon, státuszriportok, kockázatkezelés.",
      },
      {
        icon: Receipt,
        title: "TIG és számlázás",
        text: "Teljesítésigazolás és számlázás, összehangolva a pénzüggyel.",
      },
      {
        icon: HeartHandshake,
        title: "Account management",
        text: "Havi elszámolás, negyedéves retro az ügyféllel, visszajelzések.",
      },
    ],
    footnote:
      "A háttérben pedig PMO-riportok és erőforrás-tervezés fut JIRA-ban, amelyeket én építettem fel.",
  },

  ai: {
    eyebrow: "AI-first a gyakorlatban",
    title: "Az AI-t nem csak ajánlom. Minden nap ezzel dolgozom.",
    description:
      "A munkában és a hétköznapokban is AI-first szemlélettel élek: ha egy feladatot okosabban is el lehet végezni, megkeresem rá a módját, és utána másoknak is megmutatom.",
    terminal: {
      title: "claude · kovacs-adam-cv",
      prompt: "Készíts bemutatkozó oldalt a CV-m alapján, az AI First Mentors színeivel.",
      // A számokat a komponens tölti ki az adatokból, hogy mindig pontosak legyenek.
      steps: [
        "CV és jegyzetek feldolgozva",
        "{companies} céglogó összegyűjtve a webről",
        "{sections} szekció megírva magyarul",
        "Build kész, élesítés GitHub Pagesre",
      ],
      done: "adamkovax.github.io",
      caption: "Ezt az oldalt is Claude Code-dal építettem. A forráskód nyilvános a GitHubon.",
      captionLink: "Forráskód megnyitása",
    },
    cards: [
      {
        icon: Bot,
        title: "Saját agentek Claude Code-dal",
        text: "Agenteket építek JIRA-integrációhoz, HubSpot-folyamatokhoz, ajánlatkészítéshez és marketingfeladatokhoz, hogy a rutinmunka ne a csapat idejét vigye.",
        tags: ["Claude Code", "JIRA", "HubSpot"],
      },
      {
        icon: Sparkles,
        title: "AI-bevezetés ügyfeleknél",
        text: "AI-bevezetési és AI-tanácsadási projekteken dolgozom hazai kkv-knál és nagyvállalatoknál, a megfelelő probléma kiválasztásától az élesítésig.",
        tags: ["AI-bevezetés", "AI-tanácsadás"],
      },
      {
        icon: Award,
        title: "AWS GenAI kompetencia",
        text: "Alliance Leadként végigvittem, hogy a cég megszerezze az AWS Generative AI kompetenciát. Erre vagyok a legbüszkébb.",
        tags: ["AWS", "Generative AI"],
        highlight: true,
      },
      {
        icon: LayoutTemplate,
        title: "Landing oldalak AI-jal",
        text: "Webinár- és kampányoldalakat építek AI-eszközökkel, például a Devertix webinároldalát.",
        link: { label: "webinar.devertix.com", href: "https://webinar.devertix.com" },
      },
      {
        icon: Mic,
        title: "Előadó AI-webináron",
        text: "„AI a mindennapi üzleti folyamatokban” az AWS és a TD SYNNEX részvételével. Arról beszéltem, miért más megközelítést kíván egy AI-bevezetés, mint egy hagyományos szoftverfejlesztés.",
        link: {
          label: "A webinár oldala",
          href: "https://devertix.hu/AI-a-mindennapi-uzleti-folyamatokban-AWS-en/",
        },
      },
      {
        icon: Lightbulb,
        title: "AI First Mentors",
        text: "Nonprofit kezdeményezés a testvéremmel: hétköznapi embereknek és egyéni vállalkozóknak mutatjuk meg, hol spórol nekik időt és pénzt az AI.",
        link: { label: "aifirstmentors.com", href: "https://aifirstmentors.com" },
      },
    ],
  },

  experience: {
    eyebrow: "Szakmai út",
    title: "A Big4 tanácsadástól az AWS felhőig.",
    description:
      "Nagyvállalati rendszerbevezetések, szoftver- és mobilfejlesztés, majd felhőprojektek és partnerkapcsolatok. Minden állomás hozzátett a delivery egy újabb darabjához.",
    items: [
      {
        company: "devertix" as CompanyId,
        companyLabel: "Devertix · Alvicom Group",
        period: "2024 – napjainkig",
        role: "IT projekt- és szolgáltatásmenedzser · Cloud Squad Manager · AWS Alliance Lead",
        summary:
          "AWS felhő- és webfejlesztési projektek, a delivery teljes íve, és a cég AWS-partnerkapcsolata.",
        bullets: [
          "AWS felhő- és webfejlesztési projektek vezetése, szolgáltatásmenedzsment a 7x24-es AWS supportszerződésekhez.",
          "Pre-sales, cégbemutatók, ajánlatkészítés és szerződéskötés, majd TIG és számlázás a pénzüggyel összehangolva.",
          "Account management például az MBH Banknál és az EY-nál: havi elszámolás, ügyfél-elégedettség, negyedéves retro.",
          "AWS Alliance Lead: kapcsolattartás az AWS-sel és a TD SYNNEX-szel, partnertámogatások tárgyalása és lehívása, a GenAI kompetencia és további 10+ AWS-minősítés megszerzése.",
          "Zöldmezős JIRA-bevezetés, PMO-riportok és resource planning, Cloud Squad Managerként a csapat jóllétéért is felelek.",
        ],
        tags: ["AWS", "Pre-sales", "Account management", "JIRA", "AI"],
      },
      {
        company: "cheppers" as CompanyId,
        companyLabel: "Cheppers USA",
        period: "2022 – 2024",
        role: "IT projekt- és szolgáltatásmenedzser (contractor)",
        summary: "Amerikai ügyfelek AWS felhő- és Drupal-projektjei, 7x24-es ügyeleti support.",
        bullets: [
          "Antenna Group: 30 SONY Entertainment Drupal-oldal migrálása on-prem környezetből AWS-re, technikai auditok, külső streamingplatform integrálása.",
          "United Way: összetett weboldalak AWS-migrációja és CI/CD-megoldás bevezetése.",
          "Float: a 7x24-es AWS ügyeleti szolgáltatás felépítése (riasztás, service desk, integrációk), incidenskezelés, havi riportok, SLA-k betartatása.",
          "A JIRA Cloud zöldmezős bevezetése és a delivery-folyamatokhoz igazítása, service management keretrendszer kidolgozása.",
        ],
        tags: ["AWS", "Drupal", "CI/CD", "7x24 support", "JIRA"],
      },
      {
        company: "mikrum" as CompanyId,
        companyLabel: "Mikrum Enterprise IT",
        period: "2021 – 2022",
        role: "IT projektmenedzser",
        summary: "Szoftver- és mobilfejlesztési projektek teljes körű vezetése.",
        bullets: [
          "Szoftver- és mobilalkalmazás-fejlesztési projektek vezetése az indulástól az átadásig.",
          "A csapatok támogatása az agilis értékek, elvek és gyakorlatok bevezetésében.",
          "Termékéletciklus-menedzsment, összhangban az üzleti célokkal.",
        ],
        tags: ["Szoftverfejlesztés", "Mobil", "Agilis"],
      },
      {
        company: "kpmg" as CompanyId,
        companyLabel: "KPMG Hungary",
        period: "2016 – 2021",
        role: "IT Advisor (korábban gyakornok, IT elemző, junior tanácsadó)",
        summary:
          "IT projektmenedzsment, IT-tanácsadás és projekt-minőségbiztosítás komplex rendszerbevezetéseken.",
        bullets: [
          "Praktiker: SAP S/4HANA Cloud bevezetése 20 áruházban az IBM AS/400 kiváltásával. Ez volt Magyarország első SAP HANA bevezetése a kiskereskedelemben, háromfős projektmenedzsment-csapat tagjaként vezettem.",
          "Takarékbank: cut-over menedzsment az Azonnali Fizetési Rendszer (AFR) bevezetésénél, az átállási terv elkészítése és koordinálása.",
          "Erste Bank: minőségbiztosítás egy portfólióátvételi projektben, az adatmigrációs stratégia validálása és tesztelése.",
          "MVM: az SAP-bevezetés interfésztesztjeinek koordinálása.",
          "MAVIR: EMS SCADA rendszerfrissítés, projektkoordináció és PMO-riportok.",
          "Aegon: minőségbiztosítás az adatközpont Oracle-re és Linuxra migrálásánál.",
        ],
        tags: ["SAP", "Banki rendszerek", "Minőségbiztosítás", "PMO"],
      },
    ],
  },

  clients: {
    eyebrow: "Ügyfelek",
    title: "Akikkel és akiknek dolgoztam.",
    description:
      "Hazai bankok, közművek és nagyvállalatok, valamint amerikai ügyfelek, tanácsadóként és delivery-vezetőként.",
    ids: [
      "kpmg",
      "mbh",
      "ey",
      "praktiker",
      "sony",
      "unitedway",
      "mavir",
      "whb",
      "profession",
      "float",
      "antenna",
      "erste",
      "mvm",
      "aegon",
    ] as CompanyId[],
  },

  expertise: {
    eyebrow: "Technológiai területek",
    title: "Ahol otthon vagyok.",
    items: [
      { icon: Building2, title: "ERP-bevezetés", note: "SAP S/4HANA" },
      { icon: Landmark, title: "Banki rendszerek", note: "Azonnali Fizetési Rendszer" },
      { icon: Code2, title: "Szoftverfejlesztés", note: "SDLC, agilis" },
      { icon: Smartphone, title: "Mobilalkalmazások", note: "Tervezéstől az átadásig" },
      { icon: MonitorSmartphone, title: "Webfejlesztés", note: "Drupal, landing oldalak" },
      { icon: Cloud, title: "Felhőmigráció", note: "AWS" },
      { icon: CloudCog, title: "Felhőüzemeltetés", note: "7x24 support, SLA" },
      { icon: Sparkles, title: "AI-bevezetés", note: "GenAI, agentek" },
      { icon: Lightbulb, title: "AI-tanácsadás", note: "Use case-ek, bevezetési terv" },
      { icon: Palette, title: "UX/UI projektek", note: "Tervezés, prototípus" },
    ],
  },

  responsibilities: {
    eyebrow: "A projektmenedzsmenten túl",
    title: "Ahol a PM-szerepen túl is felelősséget viszek.",
    items: [
      {
        icon: Handshake,
        title: "AWS Alliance Lead",
        subtitle: "Partnerkapcsolat az AWS-sel és a TD SYNNEX-szel",
        bullets: [
          "Kapcsolattartás az AWS-sel és a TD SYNNEX disztribútorral",
          "Együttműködési lehetőségek feltárása",
          "Partnertámogatások tárgyalása és lehívása",
          "Partnerminősítések: az AWS GenAI kompetencia és további 10+ minősítés",
          "Részvétel nemzetközi AWS-eseményeken és webinárokon",
        ],
        highlight: true,
      },
      {
        icon: KanbanSquare,
        title: "Zöldmezős JIRA-bevezetés",
        subtitle: "Cheppers USA és Devertix",
        bullets: [
          "Alapbeállítások, projektek és board-sémák (Kanban, Scrum)",
          "Jogosultsági rendszer",
          "Riportálás és időkönyvelés bevezetése",
          "Integrációk és migráció a fejlesztőkkel",
        ],
      },
      {
        icon: HeartHandshake,
        title: "Account management",
        subtitle: "Például MBH Bank és EY",
        bullets: [
          "Havi elszámolások",
          "Ügyfél-elégedettség",
          "Negyedéves retro az ügyféllel",
          "Visszajelzések rendszeres kérése",
        ],
      },
      {
        icon: ShieldCheck,
        title: "ISO 9001 minőségirányítás",
        subtitle: "Házon belüli felkészítés vezetése",
        bullets: [
          "Együttműködés a felkészítő auditorral",
          "Az éves minőségi célok elérése",
          "A megújító audit támogatása",
        ],
      },
      {
        icon: BarChart3,
        title: "PMO és erőforrás-tervezés",
        subtitle: "Átlátható portfólió JIRA-ban",
        bullets: [
          "Resource planning a projektek között",
          "PMO-riportok JIRA-ban",
          "TIG és számlázás koordinálása",
        ],
      },
    ],
  },

  credentials: {
    eyebrow: "Minősítések és végzettség",
    title: "Papíron is igazolva.",
    certsTitle: "Minősítések",
    certs: [
      { icon: BadgeCheck, title: "PMP", subtitle: "Project Management Professional · PMI" },
      { icon: BadgeCheck, title: "Accredited Scrum Master", subtitle: "Scrum Master of Hungary · 2022" },
      { icon: BadgeCheck, title: "AWS Partner: Sales Accreditation", subtitle: "Amazon Web Services" },
      {
        icon: BadgeCheck,
        title: "AWS Partner: Business és Technical Accreditation",
        subtitle: "Amazon Web Services",
      },
      {
        icon: BadgeCheck,
        title: "Google Project Management Professional",
        subtitle: "Coursera · 2024",
      },
    ],
    awsNote:
      "További AWS partnerképzések: Cloud Practitioner, Technical Foundations, Migration, Managed Services, AI.",
    educationTitle: "Tanulmányok",
    education: [
      {
        icon: GraduationCap,
        title: "Budapesti Gazdasági Egyetem",
        subtitle: "Gazdaságinformatikus BSc · Pénzügyi és Számviteli Kar",
        period: "2017",
      },
      {
        icon: Languages,
        title: "EF Language School, Bristol",
        subtitle: "Angol nyelv, B2/C1 kommunikációs szint",
        period: "2018",
      },
    ],
  },

  contact: {
    eyebrow: "Kapcsolat",
    title: "Projekttel vagy együttműködéssel keresnél?",
    description:
      "Írj bátran e-mailben vagy LinkedInen. Egy rövid beszélgetésből kiderül, miben tudok segíteni.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    linkedinValue: "Kovács Ádám, PMP",
    locationLabel: "Helyszín",
    locationValue: "Budapest",
    copy: "Másolás",
    copied: "Kimásolva",
    primaryCta: "E-mail küldése",
  },

  footer: {
    rights: "Kovács Ádám",
    builtWith: "Claude Code-dal építve",
    source: "Forráskód",
    top: "Vissza a tetejére",
  },
};

export type Content = typeof hu;
