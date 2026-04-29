"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SocialLinks } from "./SocialLinks";

const navItems = [
  {
    href: "/about",
    label: "¿Quién carajo soy?",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 60);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="site-header-inner">
        <Link href="/" className="site-logo" data-cursor="hover" aria-label="Tomas Holtz home">
          Tomas
          <br />
          Holtz
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="site-nav-links">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="site-nav-link"
                    data-active={isActive}
                    data-cursor="hover"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-nav-icons">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
