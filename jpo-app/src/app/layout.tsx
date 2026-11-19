import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/pages.css";

// Police de la charte graphique (Figma) : DM Sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JPO BUT MMI | IUT de Meaux",
  description:
    "Découvrez le BUT Métiers du Multimédia et de l’Internet à l’IUT de Meaux : programme, visite virtuelle et informations pratiques.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
