"use client";

import { useMemo, useState } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { useSiteContent } from "@/lib/use-site-content";
import { BlogPost, Instructor, SiteContent, SiteInfo, Workshop } from "@/lib/types";

type SaveHandler = (next: SiteContent) => void;

export default function AdminPanel() {
  const { role } = useAuth();
  const { content, save } = useSiteContent();
  const [activeTab, setActiveTab] = useState<"general" | "instructors" | "workshops" | "blog">("blog");

  const canPublish = role === "admin" || role === "editor";

  if (role === "guest") {
    return (
      <div className="rounded-2xl border border-amber-900/15 bg-amber-100/60 p-6 text-amber-950">
        Ehhez az oldalhoz editor vagy admin jogosultság szükséges.
      </div>
    );
  }

  const tabs = role === "admin"
    ? [
        ["general", "Általános"],
        ["instructors", "Oktatók"],
        ["workshops", "Workshopok"],
        ["blog", "Blog"],
      ]
    : [["blog", "Blog"]];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as typeof activeTab)}
            className={`rounded-full px-4 py-2 text-sm ${
              activeTab === id ? "bg-amber-900 text-amber-50" : "bg-amber-100 text-amber-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {role === "admin" && activeTab === "general" ? <GeneralEditor content={content} save={save} /> : null}
      {role === "admin" && activeTab === "instructors" ? <InstructorsEditor content={content} save={save} /> : null}
      {role === "admin" && activeTab === "workshops" ? <WorkshopsEditor content={content} save={save} /> : null}
      {activeTab === "blog" ? <BlogEditor content={content} save={save} canPublish={canPublish} /> : null}
    </div>
  );
}

function GeneralEditor({ content, save }: { content: SiteContent; save: SaveHandler }) {
  const [form, setForm] = useState<SiteInfo>(content.siteInfo);

  return (
    <EditorCard title="Oldal információk">
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(form).map(([key, value]) => (
          <label key={key} className="text-sm text-amber-900">
            {key}
            <input
              value={String(value)}
              onChange={(event) => setForm({ ...form, [key]: event.target.value })}
              className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2"
            />
          </label>
        ))}
      </div>
      <SaveButton onClick={() => save({ ...content, siteInfo: form })} />
    </EditorCard>
  );
}

function InstructorsEditor({ content, save }: { content: SiteContent; save: SaveHandler }) {
  const [items, setItems] = useState<Instructor[]>(content.instructors);

  return (
    <EditorCard title="Oktatók kezelése">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="grid gap-2 rounded-xl bg-amber-100/60 p-3 md:grid-cols-3">
            <input
              value={item.name}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, name: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Név"
            />
            <input
              value={item.bio}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, bio: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Leírás"
            />
            <input
              value={item.image}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, image: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Kép URL"
            />
          </div>
        ))}
      </div>
      <SaveButton onClick={() => save({ ...content, instructors: items })} />
    </EditorCard>
  );
}

function WorkshopsEditor({ content, save }: { content: SiteContent; save: SaveHandler }) {
  const [items, setItems] = useState<Workshop[]>(content.workshops);

  return (
    <EditorCard title="Workshop metaadatok">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.id} className="grid gap-2 rounded-xl bg-amber-100/60 p-3 md:grid-cols-4">
            <input
              value={item.name}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, name: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Név"
            />
            <input
              value={item.schedule}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, schedule: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Időpont"
            />
            <input
              type="number"
              value={item.availableSpots}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, availableSpots: Number(event.target.value) };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Helyek"
            />
            <input
              value={item.shortDescription}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...item, shortDescription: event.target.value };
                setItems(next);
              }}
              className="rounded-lg border border-amber-300 px-3 py-2"
              placeholder="Rövid leírás"
            />
          </div>
        ))}
      </div>
      <SaveButton onClick={() => save({ ...content, workshops: items })} />
    </EditorCard>
  );
}

function BlogEditor({
  content,
  save,
  canPublish,
}: {
  content: SiteContent;
  save: SaveHandler;
  canPublish: boolean;
}) {
  const [posts, setPosts] = useState<BlogPost[]>(content.blogPosts);

  const draft = useMemo<BlogPost>(
    () => ({
      id: `b${Date.now()}`,
      slug: "uj-cikk",
      title: "",
      excerpt: "",
      content: "",
      published: canPublish,
      createdAt: new Date().toISOString().slice(0, 10),
    }),
    [canPublish],
  );

  const [newPost, setNewPost] = useState<BlogPost>(draft);

  const addPost = () => {
    if (!newPost.title.trim()) {
      return;
    }
    const slug = newPost.slug.trim() || newPost.title.toLowerCase().replace(/\s+/g, "-");
    const next = [{ ...newPost, slug, published: canPublish ? newPost.published : false }, ...posts];
    setPosts(next);
    setNewPost({ ...draft, id: `b${Date.now()}` });
  };

  return (
    <EditorCard title="Blog tartalom">
      <div className="space-y-4 rounded-xl bg-amber-100/60 p-4">
        <p className="text-sm text-amber-900">Új bejegyzés</p>
        <input
          value={newPost.title}
          onChange={(event) => setNewPost({ ...newPost, title: event.target.value })}
          placeholder="Cím"
          className="w-full rounded-lg border border-amber-300 px-3 py-2"
        />
        <input
          value={newPost.slug}
          onChange={(event) => setNewPost({ ...newPost, slug: event.target.value })}
          placeholder="Slug"
          className="w-full rounded-lg border border-amber-300 px-3 py-2"
        />
        <textarea
          value={newPost.excerpt}
          onChange={(event) => setNewPost({ ...newPost, excerpt: event.target.value })}
          placeholder="Kivonat"
          className="min-h-20 w-full rounded-lg border border-amber-300 px-3 py-2"
        />
        <textarea
          value={newPost.content}
          onChange={(event) => setNewPost({ ...newPost, content: event.target.value })}
          placeholder="Tartalom"
          className="min-h-28 w-full rounded-lg border border-amber-300 px-3 py-2"
        />
        <label className="flex items-center gap-2 text-sm text-amber-900">
          <input
            type="checkbox"
            checked={newPost.published}
            disabled={!canPublish}
            onChange={(event) => setNewPost({ ...newPost, published: event.target.checked })}
          />
          Publikált
        </label>
        <button onClick={addPost} className="rounded-full bg-amber-800 px-4 py-2 text-sm text-amber-50">
          Hozzáadás
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {posts.map((post, index) => (
          <div key={post.id} className="rounded-xl bg-amber-100/60 p-4">
            <input
              value={post.title}
              onChange={(event) => {
                const next = [...posts];
                next[index] = { ...post, title: event.target.value };
                setPosts(next);
              }}
              className="w-full rounded-lg border border-amber-300 px-3 py-2"
            />
            <textarea
              value={post.excerpt}
              onChange={(event) => {
                const next = [...posts];
                next[index] = { ...post, excerpt: event.target.value };
                setPosts(next);
              }}
              className="mt-2 min-h-20 w-full rounded-lg border border-amber-300 px-3 py-2"
            />
            <label className="mt-2 flex items-center gap-2 text-sm text-amber-900">
              <input
                type="checkbox"
                checked={post.published}
                disabled={!canPublish}
                onChange={(event) => {
                  const next = [...posts];
                  next[index] = { ...post, published: event.target.checked };
                  setPosts(next);
                }}
              />
              Publikált
            </label>
          </div>
        ))}
      </div>

      <SaveButton onClick={() => save({ ...content, blogPosts: posts })} />
    </EditorCard>
  );
}

function EditorCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-amber-900/10 bg-amber-50 p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-amber-950">{title}</h2>
      {children}
    </section>
  );
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="mt-4 rounded-full bg-amber-900 px-4 py-2 text-sm text-amber-50">
      Mentés
    </button>
  );
}


