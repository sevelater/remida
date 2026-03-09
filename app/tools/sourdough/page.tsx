import type { Metadata } from "next";
import SourdoughCalculator from "@/components/tools/sourdough-calculator";

export const metadata: Metadata = {
  title: "Kovász kalkulátor | Kovasz Muhely",
  description: "Számold ki liszt, víz és kovász arányait gyorsan.",
};

export default function SourdoughPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-4xl font-semibold text-amber-950">Kovász kalkulátor</h1>
      <p className="mt-2 text-amber-900/80">Állítsd be az arányokat, a számok azonnal frissülnek.</p>
      <div className="mt-8">
        <SourdoughCalculator />
      </div>
    </div>
  );
}

