"use client";

import Link from "next/link";
import FAQAccordion from "@/components/ui/faq-accordion";
import { PrimaryButton, SectionTitle } from "@/components/ui/common";
import WorkshopCard from "@/components/workshops/workshop-card";
import { useSiteContent } from "@/lib/use-site-content";

const testimonials = [
  {
    name: "Anna",
    quote: "Fantasztikus hangulat, profi oktatók, és végre értem a kovászt.",
  },
  {
    name: "Máté",
    quote: "Nagyon gyakorlatias volt, másnap már otthon is sikerült a kenyér.",
  },
  {
    name: "Kinga",
    quote: "Igazi közösségi élmény, minőségi alapanyagokkal.",
  },
];

export default function LandingPage() {
  const { content } = useSiteContent();
  const { workshops, instructors, siteInfo } = content;

  return (
    <div className="space-y-20 pb-10">
      <section id="hero" className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80"
          alt="Frissen sült kenyerek"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-amber-50 md:text-6xl">
              Kovászos workshopok otthonos műhelyhangulatban
            </h1>
            <p className="mt-4 max-w-xl text-amber-100">
              Tanulj gyakorlati technikákat, süss velünk, és vidd haza a tudást, receptet és saját kenyeredet.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/courses" label="Workshoppok megtekintése" />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Miért érdemes csatlakozni?" subtitle="Kézzel fogható tudás és valódi műhelyélmény." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Hasznos készségek",
              text: "Kovásznevelés, tésztafejlesztés, formázás és sütés lépésről lépésre.",
              image:
                "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Amit hazaviszel",
              text: "Saját kenyér, aktív kovász, részletes receptek és biztos rutin.",
              image:
                "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Közösségi élmény",
              text: "Barátságos közeg, közös sütés, inspiráló beszélgetések.",
              image:
                "https://images.unsplash.com/photo-1556910638-6cdac31d44dc?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((card) => (
            <article key={card.title} className="overflow-hidden rounded-3xl border border-amber-900/10 bg-amber-50">
              <img src={card.image} alt={card.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-amber-950">{card.title}</h3>
                <p className="mt-2 text-sm text-amber-900/80">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-amber-100/50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <SectionTitle title="A sütés élménye" subtitle="Illatok, kézművesség, és nyugodt flow a műhelyben." />
            <p className="text-amber-900/90">
              Hiszünk abban, hogy a kenyérkészítés egyszerre alkotás és kikapcsolódás. Workshopjainkon minden mozdulatnak
              jelentése van: a liszttől az első bevágásig.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&w=1200&q=80"
              alt="Tésztakészítés"
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80"
              alt="Közös sütés"
              className="h-48 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="team" className="px-4 md:px-6">
        <SectionTitle title="Csapatunk" subtitle="Tapasztalt oktatók, közvetlen stílus." />
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 md:-mx-6 md:px-6">
          {instructors.map((instructor) => (
            <article key={instructor.id} className="min-w-72 rounded-2xl border border-amber-900/10 bg-amber-50 p-3">
              <div className="flex items-center gap-3">
                <img src={instructor.image} alt={instructor.name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-amber-950">{instructor.name}</h3>
                  <p className="text-sm text-amber-900/80">{instructor.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="upcoming" className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Közelgő workshopok" />
        <div className="grid gap-5 md:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Vélemények" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-amber-100/70 p-5 text-amber-900">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-3 text-sm font-medium text-amber-950">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Gyakori kérdések" />
        <FAQAccordion
          items={[
            {
              question: "Kell tapasztalat?",
              answer: "Nem, a workshopok kezdőbarátak, minden alapot közösen átvesszük.",
            },
            {
              question: "Mit kell hozni?",
              answer: "Kényelmes ruhát és dobozt a haza vitt pékárunak. Minden mást adunk.",
            },
            {
              question: "Kapunk valamit hazavinni?",
              answer: "Igen, kész terméket, kovászt és recepteket is kapsz.",
            },
            {
              question: "Mi történik lemondásnál?",
              answer: "72 órán belüli lemondásnál kuponra váltjuk a részvételi díjat.",
            },
          ]}
        />
      </section>

      <section id="location" className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle title="Helyszín" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-amber-100/60 p-5 text-amber-900">
            <p className="font-medium text-amber-950">{siteInfo.address}</p>
            <p className="mt-3 text-sm">Könnyen megközelíthető műhely, barátságos környezetben.</p>
            <Link href="/courses" className="mt-4 inline-flex text-sm font-medium text-amber-800 hover:underline">
              Workshopok megtekintése
            </Link>
          </div>
          <iframe
            title="Műhely térkép"
            src="https://www.google.com/maps?q=Budapest%20Malom%20utca%2012&output=embed"
            loading="lazy"
            className="h-72 w-full rounded-2xl border border-amber-900/10"
          />
        </div>
      </section>
    </div>
  );
}


