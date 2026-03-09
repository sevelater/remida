"use client";

import WorkshopCard from "@/components/workshops/workshop-card";
import { useAuth } from "@/components/providers/auth-provider";
import { useSiteContent } from "@/lib/use-site-content";

export default function CoursesPageContent() {
  const { role } = useAuth();
  const { content, save } = useSiteContent();
  const isAdmin = role === "admin";

  return (
    <div className="space-y-6">
      {isAdmin ? (
        <div className="rounded-2xl border border-amber-900/10 bg-amber-100/60 p-4 text-sm text-amber-900">
          Admin gyorsszerkesztés a workshopokhoz
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-3">
        {content.workshops.map((workshop, index) => (
          <div key={workshop.id} className="space-y-2">
            <WorkshopCard workshop={workshop} />
            {isAdmin ? (
              <div className="rounded-xl bg-amber-100/60 p-3">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-amber-900/70">Gyors szerkesztés</p>
                <div className="grid gap-2">
                  <input
                    value={workshop.schedule}
                    onChange={(event) => {
                      const next = [...content.workshops];
                      next[index] = { ...workshop, schedule: event.target.value };
                      save({ ...content, workshops: next });
                    }}
                    className="rounded-lg border border-amber-300 px-3 py-2 text-sm"
                  />
                  <input
                    type="number"
                    value={workshop.availableSpots}
                    onChange={(event) => {
                      const next = [...content.workshops];
                      next[index] = { ...workshop, availableSpots: Number(event.target.value) };
                      save({ ...content, workshops: next });
                    }}
                    className="rounded-lg border border-amber-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

