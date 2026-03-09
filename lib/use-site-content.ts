"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultContent } from "./data";
import { SiteContent } from "./types";

const CONTENT_KEY = "bakery_content_v1";

function readStorage(): SiteContent {
  if (typeof window === "undefined") {
    return defaultContent;
  }

  const raw = window.localStorage.getItem(CONTENT_KEY);
  if (!raw) {
    return defaultContent;
  }

  try {
    const parsed = JSON.parse(raw) as SiteContent;
    return {
      ...defaultContent,
      ...parsed,
      siteInfo: { ...defaultContent.siteInfo, ...parsed.siteInfo },
    };
  } catch {
    return defaultContent;
  }
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    setContent(readStorage());
  }, []);

  const save = (next: SiteContent) => {
    setContent(next);
    window.localStorage.setItem(CONTENT_KEY, JSON.stringify(next));
  };

  const value = useMemo(() => ({ content, save }), [content]);
  return value;
}

