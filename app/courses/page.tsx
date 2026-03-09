import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/common";
import CoursesPageContent from "@/components/workshops/courses-page-content";

export const metadata: Metadata = {
  title: "Workshoppok | Kovasz Muhely",
  description: "Böngészd workshopjainkat és jelentkezz a neked tetsző alkalomra.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionTitle title="Workshopok" subtitle="Válaszd ki a számodra legizgalmasabb témát." />
      <CoursesPageContent />
    </div>
  );
}

