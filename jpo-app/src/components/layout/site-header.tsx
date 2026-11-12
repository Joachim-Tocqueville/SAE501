"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "La formation", href: "/formation" },
  { label: "Programme", href: "/programme" },
  { label: "Visite 360°", href: "/visite-360" },
  { label: "Infos pratiques", href: "/itineraire" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="IUT de Meaux, accueil">
        <span className="brand-mark">
          <span className="brand-university">UNIVERSITÉ</span>
          <span className="brand-iut">IUT</span>
        </span>
        <span className="brand-name">GUSTAVE EIFFEL</span>
      </Link>

      <nav className="main-nav" aria-label="Navigation principale">
        {navigation.map((item) => (
          <Link
            className={
              pathname === item.href ? "nav-link nav-link--active" : "nav-link"
            }
            aria-current={pathname === item.href ? "page" : undefined}
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="button button--outline button--small" href="/itineraire">
          <Icon name="map" size={13} />
          Mon itinéraire
        </Link>
        <Link className="button button--primary button--small" href="/inscription">
          S’inscrire
        </Link>
      </div>
      <a className="mobile-menu" href="#navigation-mobile" aria-label="Aller à la navigation">
        <Icon name="menu" size={20} />
      </a>
      <nav className="mobile-nav" id="navigation-mobile" aria-label="Navigation mobile">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
