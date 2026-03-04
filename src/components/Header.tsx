"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isVisible?: boolean;
}

export function Header({ isVisible = true }: HeaderProps) {
  const pathname = usePathname();
  const navItems = [
    { label: "Petite Enfance", href: "/#menu-nav", matchPath: "/" },
    { label: "Formation", href: "/formation", matchPath: "/formation" },
    { label: "Réglementation", href: "/reglementation", matchPath: "/reglementation" },
    {
      label: "Pratiques professionnelles",
      href: "/pratiques-professionnelles",
      matchPath: "/pratiques-professionnelles",
    },
    { label: "Pédagogie", href: "/pedagogie", matchPath: "/pedagogie" },
  ];

  return (
    <header className={`site-header${isVisible ? " site-header--visible" : " site-header--hidden"}`}>
      {/* Main header */}
      <div className="header-main">
        <div className="header-main__inner">
          {/* Logo */}
          <Link href="/" className="header-logo" aria-label="Retour à l'accueil">
            <img
              src="/asset/logo-trasparent.png"
              alt="Logo La Petite Enfance"
              className="header-logo__icon"
            />
          </Link>

          {/* Right section */}
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav" aria-label="Navigation principale">
        <div className="header-nav__inner">
          <ul className="header-nav__list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`header-nav__link${item.matchPath && pathname === item.matchPath ? " header-nav__link--active" : ""}`}
                  aria-current={item.matchPath && pathname === item.matchPath ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
