export type UserRole = "guest" | "editor" | "admin";

export type Workshop = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  schedule: string;
  availableSpots: number;
  learn: string[];
  takeHome: string[];
  image: string;
};

export type Instructor = {
  id: string;
  name: string;
  bio: string;
  image: string;
};

export type SiteInfo = {
  address: string;
  email: string;
  phone: string;
  facebook: string;
  instagram: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published: boolean;
  createdAt: string;
};

export type SiteContent = {
  siteInfo: SiteInfo;
  instructors: Instructor[];
  workshops: Workshop[];
  blogPosts: BlogPost[];
  purchases: string[];
};

