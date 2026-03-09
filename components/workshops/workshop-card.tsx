import Link from "next/link";
import { Workshop } from "@/lib/types";

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-amber-900/10 bg-amber-50 shadow-sm">
      <img src={workshop.image} alt={workshop.name} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-amber-950">{workshop.name}</h3>
        <p className="text-sm text-amber-900/80">{workshop.shortDescription}</p>
        <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          {workshop.availableSpots} hely maradt
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Link
            href={`/course/${workshop.id}`}
            className="inline-flex rounded-full border border-amber-300 px-4 py-2 text-sm text-amber-900 hover:bg-amber-100"
          >
            Részletek
          </Link>
          <Link
            href={`/course/${workshop.id}`}
            className="inline-flex rounded-full bg-amber-700 px-4 py-2 text-sm text-amber-50 hover:bg-amber-800"
          >
            Jelentkezem
          </Link>
        </div>
      </div>
    </article>
  );
}

