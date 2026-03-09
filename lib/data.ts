import { SiteContent } from "./types";

export const defaultContent: SiteContent = {
  siteInfo: {
    address: "1094 Budapest, Malom utca 12.",
    email: "hello@kovaszmuhely.hu",
    phone: "+36 30 555 2244",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  instructors: [
    {
      id: "i1",
      name: "Kata",
      bio: "Kézműves pék és kovászos szakoktató 10+ év tapasztalattal.",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "i2",
      name: "Bence",
      bio: "A lassú fermentáció és a tradicionális technikák rajongója.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "i3",
      name: "Dóri",
      bio: "Családias, inspiráló workshopokat vezet kezdőknek és haladóknak.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  workshops: [
    {
      id: "kenyer-sutes",
      name: "Kenyér sütés",
      shortDescription: "Kovászos alapoktól a ropogós héjig.",
      description:
        "Gyakorlatias, egész napos workshop, ahol közösen készítünk többféle kovászos kenyeret és megtanuljuk az időzítést, hajtogatást, formázást.",
      schedule: "Március 22. 10:00-16:00",
      availableSpots: 3,
      learn: ["Kovász etetés", "Tésztafejlesztés", "Formázás", "Sütési görbe"],
      takeHome: ["1 db saját kenyér", "Aktív kovász", "Receptek"],
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "pek-sutemenyek",
      name: "Pék sütemények",
      shortDescription: "Vajas tészták és reggeli klasszikusok.",
      description:
        "Megtanuljuk a leveles és dúsított tészták alapjait, croissant és csigák készítését otthoni körülmények között.",
      schedule: "Április 5. 09:00-14:00",
      availableSpots: 6,
      learn: ["Vajtúrás technika", "Hőmérséklet kontroll", "Kelesztés"],
      takeHome: ["8-10 db péksütemény", "Lépésenkénti jegyzet"],
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fokusz-pizza",
      name: "Pizza és focaccia",
      shortDescription: "Magas hidratációjú tészták könnyedén.",
      description:
        "Nápolyi ihletésű pizza és olaszos focaccia workshop, sok gyakorlással és sütési trükkel.",
      schedule: "Április 19. 11:00-16:00",
      availableSpots: 4,
      learn: ["Magas hidratáció", "Nyújtás", "Feltétezés", "Sütés acéllapon"],
      takeHome: ["Saját tészta", "Focaccia", "Receptek"],
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  blogPosts: [
    {
      id: "b1",
      slug: "kovasz-alapok",
      title: "Kovász alapok otthon",
      excerpt: "Egyszerű napi rutin, amivel stabil kovászt nevelhetsz.",
      content:
        "A kovász gondozása napi 5 perc figyelemmel is működik. Ebben a cikkben végigmegyünk az etetés arányain, a hőmérséklet szerepén és az időzítésen.",
      published: true,
      createdAt: "2026-02-20",
    },
    {
      id: "b2",
      slug: "miert-reped-a-kenyer",
      title: "Miért reped a kenyér?",
      excerpt: "Gyakori hibák formázásnál és bevágásnál.",
      content:
        "A repedés sokszor nem hiba, de ha nem ott nyílik a kenyér ahol szeretnéd, a formázás és a bevágás technikáján érdemes finomítani.",
      published: true,
      createdAt: "2026-03-01",
    },
  ],
  purchases: ["kenyer-sutes"],
};

