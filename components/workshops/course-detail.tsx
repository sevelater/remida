"use client";

import { useMemo, useState } from "react";
import { useSiteContent } from "@/lib/use-site-content";

export default function CourseDetail({ courseId }: { courseId: string }) {
  const { content, save } = useSiteContent();
  const workshop = useMemo(() => content.workshops.find((w) => w.id === courseId), [content.workshops, courseId]);
  const [booked, setBooked] = useState(content.purchases.includes(courseId));

  if (!workshop) {
    return <p className="text-amber-900">A workshop nem található.</p>;
  }

  const handleBook = () => {
    if (booked) {
      return;
    }

    const purchases = Array.from(new Set([...content.purchases, workshop.id]));
    save({ ...content, purchases });
    setBooked(true);
  };

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-amber-900/10 bg-amber-50">
        <img src={workshop.image} alt={workshop.name} className="h-72 w-full object-cover" />
        <div className="space-y-4 p-6">
          <h1 className="text-3xl font-semibold text-amber-950">{workshop.name}</h1>
          <p className="text-amber-900/85">{workshop.description}</p>
          <div className="grid gap-3 text-sm text-amber-900 md:grid-cols-2">
            <p>
              <strong>Időpont:</strong> {workshop.schedule}
            </p>
            <p>
              <strong>Szabad hely:</strong> {workshop.availableSpots}
            </p>
          </div>
          <button
            onClick={handleBook}
            className="rounded-full bg-amber-700 px-5 py-3 text-sm font-medium text-amber-50 hover:bg-amber-800"
          >
            {booked ? "Már megvásároltad" : "Jelentkezem"}
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-amber-100/60 p-5">
          <h2 className="font-semibold text-amber-950">Mit tanulsz?</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-amber-900">
            {workshop.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-amber-100/60 p-5">
          <h2 className="font-semibold text-amber-950">Mit viszel haza?</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-amber-900">
            {workshop.takeHome.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-900/10 bg-amber-50 p-5 text-sm text-amber-900">
        <h3 className="text-base font-semibold text-amber-950">Megvásárolt workshopok</h3>
        <ul className="mt-2 list-inside list-disc">
          {content.purchases.map((id) => {
            const found = content.workshops.find((w) => w.id === id);
            return <li key={id}>{found ? found.name : id}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

