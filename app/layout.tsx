import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/auth-provider";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kovasz Muhely | Kenyér workshopok",
  description: "Kovászos és pék workshopok Budapesten. Böngéssz alkalmak között és foglalj egyszerűen.",
  keywords: ["workshop", "pékség", "kovász", "kenyérsütés", "Budapest"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${heading.variable} ${body.variable} bg-amber-50 text-amber-950 antialiased`}>
        <AuthProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  );
}

