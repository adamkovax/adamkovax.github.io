import {
  Award,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Building2,
  CalendarRange,
  ClipboardCheck,
  Cloud,
  CloudCog,
  Code2,
  FileSignature,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  KanbanSquare,
  Landmark,
  Languages,
  Lightbulb,
  Mic,
  MonitorSmartphone,
  NotebookPen,
  Palette,
  Presentation,
  Receipt,
  Rocket,
  Route,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { CompanyId } from "./companies";

// Minden magyar szöveg ebben a fájlban van. Az angol változathoz elég egy
// ugyanilyen szerkezetű en.ts, a komponensek a `Content` típusból dolgoznak.
//
// Stílusszabály: nincs gondolatjeles közbevetés a szövegben. Ahol magyarázat
// kell, kettőspont, zárójel vagy külön mondat.

const EMAIL = "adam.kovx@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/%C3%A1d%C3%A1m-kov%C3%A1cs-pmp-1a7563b0/";

export const hu = {
  lang: "hu",

  links: { email: EMAIL, linkedin: LINKEDIN },

  nav: [
    { id: "rolam", label: "Rólam" },
    { id: "delivery", label: "Delivery" },
    { id: "ai", label: "AI-bevezetés" },
    { id: "tapasztalat", label: "Tapasztalat" },
    { id: "ugyfelek", label: "Ügyfelek" },
    { id: "minositesek", label: "Minősítések" },
  ],
  navCta: "Kapcsolat",
  brandTagline: "Projektek · AI · AWS",
  menuLabel: "Menü",

  hero: {
    badge: "PMP · Accredited Scrum Master · AWS partner · Lovable Expert",
    name: "Kovács Ádám",
    role: "IT projektmenedzser és AI‑bevezetési tanácsadó",
    leadBefore: "A projekt teljes életciklusában otthon vagyok, az első ügyféltalálkozótól a számlázásig, ",
    leadHighlight: "AI-first szemlélettel.",
    body: "Több mint 8 év technológiai projekt- és ügyfélmenedzsment a KPMG-nél, szoftverfejlesztő és AWS felhőcégeknél. Az AI-t nem csak ajánlom: minden nap ezzel dolgozom.",
    primaryCta: "Írj nekem",
    secondaryCta: "LinkedIn-profil",
    photoAlt: "Kovács Ádám portréja",
  },

  stats: [
    { value: "8+", label: "év technológiai projekt- és ügyfélmenedzsment" },
    { value: "11+", label: "AWS partnerminősítés, köztük a GenAI kompetencia" },
    { value: "3+", label: "év tapasztalat AI-projektekben" },
    { value: "2", label: "zöldmezős JIRA-bevezetés a nulláról" },
  ],

  about: {
    eyebrow: "Rólam",
    title: "Nem csak projektet menedzselek. A teljes életciklusban tudok segíteni.",
    // Az első két bekezdés és a kiemelés az aifirstmentors.com/rolunk szövege.
    paragraphs: [
      "Több mint nyolc éve dolgozom tanácsadóként és projektmenedzserként, az elmúlt három évben pedig AI-bevezetési projekteken leginkább hazai kkv-knál és nagyvállalatoknál.",
      "Az AI-t az első nyilvánosan elérhető modellek megjelenése óta követem, és a munkám mellett a mindennapjaimban is használom. Segítségével időt, energiát és költségeket takarítottam meg nemcsak magamnak, hanem kollégáimnak, barátaimnak és családomnak is.",
      "A projekt minden szakaszában részt tudok venni: a pre-sales beszélgetéstől és a cégbemutatótól az ajánlatadáson, a tervezésen és a megvalósításon át a teljesítésigazolásig és a számlázásig. Mindezt szoros együttműködésben a sales, a jogi és a pénzügyi területtel.",
    ],
    quote: "A tapasztalatom szerint a legtöbb kihívásnál nem a probléma nagysága számít, hanem a megfelelő megközelítés megtalálása.",
    quoteHighlight: "Ezt a gyakorlati szemléletet hozom el minden projektbe, egyszerűbb és összetettebb helyzetekben is.",
    factsTitle: "Röviden",
    facts: [
      { icon: Building2, label: "Bázis", value: "Budapest" },
      { icon: Languages, label: "Nyelvek", value: "Magyar, angol (B2/C1)" },
      { icon: GraduationCap, label: "Végzettség", value: "Gazdaságinformatikus BSc" },
      { icon: KanbanSquare, label: "Módszertan", value: "PMP, Scrum, Kanban" },
      { icon: Workflow, label: "Eszközök", value: "Claude Code, Lovable, GitHub, JIRA, Miro, AWS, Vercel, Supabase, Sanity" },
    ],
  },

  delivery: {
    eyebrow: "A teljes életciklusban",
    title: "Az első megbeszéléstől az utolsó számláig.",
    description:
      "A projekt minden szakaszában részt tudok venni és támogatni tudom a csapatot. A kulcs az együttműködés: szorosan dolgozom együtt a sales, a jogi és a pénzügyi területtel, hogy az átadásoknál ne vesszen el semmi.",
    steps: [
      {
        icon: Presentation,
        title: "Pre-sales",
        text: "Cégbemutató, igényfelmérés és az első ügyfélmegbeszélések a sales csapattal.",
        with: ["Sales", "Ügyfél"],
      },
      {
        icon: FileSignature,
        title: "Ajánlatadás",
        text: "Becslés és ajánlat, a szerződés előkészítése a jogi területtel, tenderekben is.",
        with: ["Sales", "Jog"],
      },
      {
        icon: CalendarRange,
        title: "Tervezés",
        text: "Ütemterv, resource planning és a megfelelő csapat összeállítása.",
        with: ["Fejlesztők"],
      },
      {
        icon: Rocket,
        title: "Megvalósítás",
        text: "Projektvezetés PMP és Scrum alapokon, státuszriportok, kockázatkezelés.",
        with: ["Fejlesztők", "Ügyfél"],
      },
      {
        icon: Receipt,
        title: "TIG és számlázás",
        text: "Teljesítésigazolás az ügyféllel, számlázás a pénzüggyel együttműködve.",
        with: ["Pénzügy", "Ügyfél"],
      },
      {
        icon: HeartHandshake,
        title: "Account management",
        text: "Havi elszámolás, negyedéves retro az ügyféllel, visszajelzések.",
        with: ["Ügyfél", "Sales"],
      },
    ],
    withLabel: "Együttműködés",
    footnote:
      "A háttérben pedig PMO-riportok és erőforrás-tervezés fut JIRA-ban, amelyeket én építettem fel.",
  },

  // Ügyfeleknél végzett AI-munka: bevezetés, tanácsadás, termékfejlesztés.
  aiDelivery: {
    eyebrow: "AI-bevezetés",
    title: "Három éve vezetek AI-bevezetéseket ügyfeleknél.",
    description:
      "Kkv-knak és nagyvállalatoknak, a tervezéstől a PoC-n át az élesítésig, saját bevezetési módszertannal.",
    stats: [
      { value: "3+ év", label: "AI-bevezetési projektek, több párhuzamosan" },
      { value: "1–5 hónap", label: "egy AI-projekt átlagos átfutása" },
      { value: "1–4 hét", label: "egy AI-projekt részletes tervezése" },
    ],
    cards: [
      {
        icon: Scale,
        title: "AI-tanácsadás és tervezés",
        text: "AI-projektek részletes tervezése a szabályozói keretek figyelembevételével, hogy a bevezetés ne a megfelelésen bukjon el.",
        tags: ["EU AI Act", "DORA", "MNB"],
      },
      {
        icon: FlaskConical,
        title: "PoC-k leszállítása",
        text: "Gyors proof of conceptek, amelyekből az ügyfél a teljes bevezetés előtt látja, mit hoz az AI a saját folyamataiban.",
        tags: ["PoC", "GenAI"],
      },
      {
        icon: Route,
        title: "Saját bevezetési módszertan",
        text: "Saját AI-bevezetési módszertant dolgoztam ki: a megfelelő probléma kiválasztásától az integráció mélységének meghatározásáig.",
        tags: ["Módszertan"],
      },
      {
        icon: BrainCircuit,
        title: "AI termékfejlesztés",
        text: "Az Athene AI a Devertix, az R-Szoft és az Alvicom közös generatív AI platformja, amely a vállalati folyamatokra épül.",
        logo: "athene" as CompanyId,
        link: { label: "atheneai.hu", href: "https://www.atheneai.hu/" },
      },
      {
        icon: Award,
        title: "AWS GenAI kompetencia",
        text: "Alliance Leadként végigvittem, hogy a cég megszerezze az AWS Generative AI kompetenciát. Erre vagyok a legbüszkébb.",
        tags: ["AWS", "Generative AI"],
        highlight: true,
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
    ],
  },

  // A saját PM-munkában használt AI: konkrét, ismétlődő feladatok.
  aiDaily: {
    eyebrow: "AI-first a mindennapokban",
    title: "Projektmenedzserként is AI‑jal dolgozom.",
    description:
      "Az AI-t nem csak ügyfeleknél vezetem be. A saját munkámban is minden nap használom, ezekre a feladatokra például:",
    useCases: [
      {
        icon: Presentation,
        title: "Céges bemutatkozók és weboldalak",
        text: "Bemutatkozó prezentációk, landing és webinároldalak, például a webinar.devertix.com.",
        tools: ["Lovable", "Claude Code", "GitHub", "Vercel", "Supabase", "Sanity"],
      },
      {
        icon: KanbanSquare,
        title: "JIRA-projektek AI-jal",
        text: "JIRA-integrációval hozom létre a projekteket, alakítom ki a story-kat és készítem a riportokat.",
        tools: ["Claude Code", "JIRA"],
      },
      {
        icon: FileSignature,
        title: "Ajánlatok céges sablonokban",
        text: "Ajánlatok elkészítése a cég saját template dokumentumaiban.",
        tools: ["Claude Code"],
      },
      {
        icon: ClipboardCheck,
        title: "Riportok, TIG-ek, tesztjegyzőkönyvek",
        text: "Státuszriportok, teljesítésigazolások és tesztjegyzőkönyvek generálása.",
        tools: ["Claude Code", "JIRA"],
      },
      {
        icon: NotebookPen,
        title: "Emlékeztetők és jegyzőkönyvek",
        text: "Meetingek emlékeztetői és jegyzőkönyvei, gyorsan és egységes formában.",
        tools: ["Claude"],
      },
    ],
    // Illusztratív példák arra, hogyan dolgozik PM-ként Claude Code-dal.
    terminal: {
      title: "claude code",
      tabsLabel: "Példák",
      examples: [
        {
          tab: "Prezentáció",
          prompt: "Készíts céges bemutatkozó prezentációt a referenciáinkból egy banki ügyfélnek.",
          steps: [
            "Referenciák és esettanulmányok összegyűjtve",
            "Történetív: probléma, megoldás, eredmény",
            "Diák a céges arculattal",
            "Előadói jegyzetek minden diához",
          ],
          done: "bemutatkozo_bank · átnézésre kész",
        },
        {
          tab: "Ajánlat",
          prompt: "Készíts ajánlatot a tegnapi ügyfélmeeting jegyzeteiből, a céges sablonban.",
          steps: [
            "Jegyzetek feldolgozva: igények, kérdések, határidők",
            "Becslés a korábbi hasonló projektek alapján",
            "Ütemterv és erőforrásterv hozzáadva",
            "Ajánlat kitöltve a céges sablonban",
          ],
          done: "ajanlat_v1.docx · átnézésre kész",
        },
        {
          tab: "JIRA",
          prompt: "Hozd létre a JIRA-projektet és a story-kat a jóváhagyott ajánlat alapján.",
          steps: [
            "Epicek kialakítva a fő funkciókból",
            "Story-k elfogadási kritériumokkal és becslésekkel",
            "Sprintekre bontva, a board beállítva",
            "Riport-dashboard létrehozva a projekthez",
          ],
          done: "JIRA-projekt · átnézésre kész",
        },
        {
          tab: "Státuszriport",
          prompt: "Készítsd el a heti státuszriportot és a TIG-et a JIRA alapján.",
          steps: [
            "JIRA-feladatok lekérdezve az elmúlt hétre",
            "Elkészült, folyamatban lévő és blokkolt tételek",
            "Kockázatok és következő lépések",
            "TIG kitöltve a leszállított tételekkel",
          ],
          done: "statuszriport_w40.pdf · átnézésre kész",
        },
      ],
      caption: "Példák a mindennapjaimból. Az AI előkészít, én átnézem és véglegesítem.",
    },
    nonprofit: {
      icon: Lightbulb,
      title: "AI First Mentors",
      text: "Nonprofit kezdeményezés a testvéremmel: hétköznapi embereknek és egyéni vállalkozóknak mutatjuk meg, hol spórol nekik időt és pénzt az AI.",
      link: { label: "aifirstmentors.com", href: "https://aifirstmentors.com" },
    },
  },

  experience: {
    eyebrow: "Szakmai út",
    title: "A Big4 tanácsadástól az AI-bevezetésig.",
    description:
      "Nagyvállalati rendszerbevezetések, szoftver- és mobilfejlesztés, felhőprojektek, majd AI-bevezetések. Minden állomás hozzátett a delivery egy újabb darabjához.",
    items: [
      {
        company: "devertix" as CompanyId,
        companyLabel: "Devertix · Alvicom Group",
        period: "2024 – napjainkig",
        role: "IT projektmenedzser · AI-bevezetés · AWS Alliance Lead",
        summary:
          "AI-bevezetési és AWS felhőprojektek, a delivery teljes íve, és a cég AWS-partnerkapcsolata.",
        bullets: [
          "AI-bevezetési projektek kkv-knak és nagyvállalatoknak: több párhuzamos projekt átlagosan 1–5 hónapos átfutással, PoC-k leszállításával.",
          "AI-tanácsadás és AI-projektek részletes tervezése 1–4 hét alatt, az EU AI Act, a DORA és az MNB-elvárások figyelembevételével. Saját AI-bevezetési módszertan kidolgozása.",
          "AI termékfejlesztés: az Athene AI platform (atheneai.hu).",
          "AWS felhő- és webfejlesztési projektek, szolgáltatásmenedzsment a 7x24-es AWS supportszerződésekhez.",
          "Részvétel a pre-salesben, a cégbemutatókban és az ajánlatkészítésben a sales csapattal, a szerződések előkészítése a jogi területtel, a TIG és a számlázás összehangolása a pénzüggyel.",
          "Account management például az MBH Banknál és az EY-nál: havi elszámolás, ügyfél-elégedettség, negyedéves retro.",
          "AWS Alliance Lead: kapcsolattartás az AWS-sel és a TD SYNNEX-szel, partnertámogatások tárgyalása és lehívása, a GenAI kompetencia és további 10+ AWS-minősítés megszerzése.",
          "Zöldmezős JIRA-bevezetés, PMO-riportok és resource planning.",
        ],
        tags: ["AI-bevezetés", "AWS", "Pre-sales", "Account management", "JIRA"],
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
      "Hazai bankok, közművek és nagyvállalatok, valamint amerikai ügyfelek, tanácsadóként és projektmenedzserként.",
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
      { icon: Sparkles, title: "AI-bevezetés", note: "GenAI, PoC, agentek" },
      { icon: Scale, title: "AI-tanácsadás", note: "EU AI Act, DORA, MNB" },
      { icon: BrainCircuit, title: "AI termékfejlesztés", note: "Athene AI" },
      { icon: Cloud, title: "Felhőmigráció", note: "AWS" },
      { icon: CloudCog, title: "Felhőüzemeltetés", note: "7x24 support, SLA" },
      { icon: Building2, title: "ERP-bevezetés", note: "SAP S/4HANA" },
      { icon: Landmark, title: "Banki rendszerek", note: "Azonnali Fizetési Rendszer" },
      { icon: Code2, title: "Szoftverfejlesztés", note: "SDLC, agilis" },
      { icon: Smartphone, title: "Mobilalkalmazások", note: "Tervezéstől az átadásig" },
      { icon: MonitorSmartphone, title: "Webfejlesztés", note: "Drupal, Lovable" },
      { icon: Palette, title: "UX/UI projektek", note: "Tervezés, prototípus" },
      { icon: ShieldCheck, title: "Minőségirányítás", note: "ISO 9001" },
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
          "TIG és számlázás, a pénzüggyel együtt",
        ],
      },
    ],
  },

  credentials: {
    eyebrow: "Minősítések és végzettség",
    title: "Papíron is igazolva.",
    certsTitle: "Minősítések",
    newLabel: "Új",
    certs: [
      { icon: BadgeCheck, title: "PMP", subtitle: "Project Management Professional · PMI" },
      {
        icon: BadgeCheck,
        title: "Lovable Expert",
        subtitle: "Lovable Partner Program · 2026. szeptember",
        logo: { src: "/logos/lovable-icon.svg", treatment: "color" },
        isNew: true,
      },
      { icon: BadgeCheck, title: "Accredited Scrum Master", subtitle: "Scrum Master of Hungary · 2022" },
      {
        icon: BadgeCheck,
        title: "AWS Partner: Sales Accreditation",
        subtitle: "Amazon Web Services",
        logo: { src: "/logos/aws.svg", treatment: "mono" },
      },
      {
        icon: BadgeCheck,
        title: "AWS Partner: Business és Technical Accreditation",
        subtitle: "Amazon Web Services",
        logo: { src: "/logos/aws.svg", treatment: "mono" },
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
    top: "Vissza a tetejére",
  },
};

export type Content = typeof hu;
