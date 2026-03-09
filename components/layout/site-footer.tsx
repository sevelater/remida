"use client";

import { useSiteContent } from "@/lib/use-site-content";

export default function SiteFooter() {
  const { content } = useSiteContent();
  const { siteInfo } = content;

  return (
    <footer className="mt-20 border-t border-amber-900/10 bg-amber-100/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-amber-900 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-semibold text-amber-950">Kapcsolat</h3>
          <p className="mt-2">{siteInfo.address}</p>
        </div>
        <div>
          <h3 className="font-semibold text-amber-950">Elérhetőségek</h3>
          <p className="mt-2">{siteInfo.email}</p>
          <p>{siteInfo.phone}</p>
        </div>
        <div>
          <h3 className="font-semibold text-amber-950">Kövess minket</h3>
          <div className="mt-2 flex gap-4">
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href={siteInfo.instagram} target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

