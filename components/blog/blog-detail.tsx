"use client";

import { useSiteContent } from "@/lib/use-site-content";

export default function BlogDetail({ slug }: { slug: string }) {
  const { content } = useSiteContent();
  const post = content.blogPosts.find((item) => item.slug === slug && item.published);

  if (!post) {
    return <p className="text-amber-900">A bejegyzés nem található vagy nincs publikálva.</p>;
  }

  return (
    <article className="rounded-2xl border border-amber-900/10 bg-amber-50 p-6">
      <p className="text-xs text-amber-900/70">{post.createdAt}</p>
      <h1 className="mt-2 text-3xl font-semibold text-amber-950">{post.title}</h1>
      <p className="mt-5 whitespace-pre-line text-amber-900/90">{post.content}</p>
    </article>
  );
}

