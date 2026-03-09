"use client";

import { useMemo, useState } from "react";

export default function SourdoughCalculator() {
  const [flour, setFlour] = useState(500);
  const [hydration, setHydration] = useState(72);
  const [starterPct, setStarterPct] = useState(20);

  const { water, starter, total } = useMemo(() => {
    const safeFlour = Number.isFinite(flour) ? flour : 0;
    const waterVal = (safeFlour * hydration) / 100;
    const starterVal = (safeFlour * starterPct) / 100;
    return {
      water: Math.round(waterVal),
      starter: Math.round(starterVal),
      total: Math.round(safeFlour + waterVal + starterVal),
    };
  }, [flour, hydration, starterPct]);

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-amber-900/10 bg-amber-50 p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm text-amber-900">
          Liszt (g)
          <input
            type="number"
            min={0}
            value={flour}
            onChange={(event) => setFlour(Number(event.target.value))}
            className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm text-amber-900">
          Hidratáció (%)
          <input
            type="number"
            min={0}
            value={hydration}
            onChange={(event) => setHydration(Number(event.target.value))}
            className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm text-amber-900">
          Kovász (%)
          <input
            type="number"
            min={0}
            value={starterPct}
            onChange={(event) => setStarterPct(Number(event.target.value))}
            className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <ResultCard label="Víz" value={`${water} g`} />
        <ResultCard label="Kovász" value={`${starter} g`} />
        <ResultCard label="Teljes tészta" value={`${total} g`} />
      </div>
    </div>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-amber-100/70 p-4">
      <p className="text-xs uppercase tracking-wide text-amber-900/70">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-amber-950">{value}</p>
    </div>
  );
}

