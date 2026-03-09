import type { Metadata } from "next";
import BlogDetail from "@/components/blog/blog-detail";

export const metadata: Metadata = {
  title: "Bejegyzés | Kovasz Muhely",
  description: "Részletes cikk a kovászos sütés világából.",
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <BlogDetail slug={slug} />
    </div>
  );
}

