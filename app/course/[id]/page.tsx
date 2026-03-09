import type { Metadata } from "next";
import CourseDetail from "@/components/workshops/course-detail";

export const metadata: Metadata = {
  title: "Workshop részletek | Kovasz Muhely",
  description: "Workshop leírás, időpont, helyek és jelentkezés.",
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <CourseDetail courseId={id} />
    </div>
  );
}

