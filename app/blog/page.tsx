import type { Metadata } from "next";
import BlogList from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog | Kovasz Muhely",
  description: "Cikkek kovászról, sütésről és workshop tippekről.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="text-4xl font-semibold text-amber-950">Blog</h1>
      <p className="mt-2 text-amber-900/80">Tippek, útmutatók és műhelyhírek.</p>
      <div className="mt-8">
        <BlogList />
      </div>
    </div>
  );
}

