"use client";

import Link from "next/link";
import { useSiteContent } from "@/lib/use-site-content";

export default function BlogList() {
  const { content } = useSiteContent();
  const posts = content.blogPosts.filter((post) => post.published);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="rounded-2xl border border-amber-900/10 bg-amber-50 p-5">
          <p className="text-xs text-amber-900/70">{post.createdAt}</p>
          <h2 className="mt-1 text-2xl font-semibold text-amber-950">{post.title}</h2>
          <p className="mt-2 text-amber-900/85">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-medium text-amber-800 hover:underline">
            Tovább
          </Link>
        </article>
      ))}
      {!posts.length ? <p className="text-amber-900">Még nincs publikált cikk.</p> : null}
    </div>
  );
}

