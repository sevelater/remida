import type { Metadata } from "next";
import LandingPage from "@/components/home/landing-page";

export const metadata: Metadata = {
  title: "Kovasz Muhely | Főoldal",
  description: "Modern bakery workshop élmény, inspiráló csapat és gyakorlati oktatás.",
};

export default function HomePage() {
  return <LandingPage />;
}

