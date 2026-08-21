"use client";
import clsx from "clsx";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScnButton } from "./ui/scn-button";
import Wordmark from "./wordmark";
import { useState } from "react";
import useOutsideClick from "../_hooks/useOutsideClick";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Lab", href: "/lab" },
];

export default function Navbar() {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuRef = useOutsideClick(() => setIsMenuOpen(false));

  function isActiveLink(href: string) {
    if (href === "/") {
      return currentPath === "/";
    } else {
      return currentPath.startsWith(href);
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b h-(--header-height) border-sand-200 bg-sand-50/80 backdrop-blur-sm">
      <div className="flex justify-between items-center mx-auto px-4 h-full primary-container">
        {/* logo basically */}
        <Wordmark />

        {/* navigation links */}
        <nav className="max-md:hidden h-full">
          <ul className="flex items-stretch gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="h-full"
              >
                <Link
                  href={link.href}
                  className={clsx(
                    isActiveLink(link.href)
                      ? "text-amber-700"
                      : "text-sand-500 hover:text-sand-700",
                    `h-full flex items-center tracking-wide uppercase font-semibold transition-colors`,
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* navigation cta button */}
        <div className="flex items-center gap-2">
          <ScnButton
            asChild
            size="lg"
            className="bg-brown hover:bg-amber-700 px-5 text-sand-100"
          >
            <Link href="/contact">
              <Mail />
              Contact
            </Link>
          </ScnButton>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden max-md:flex justify-center items-center hover:bg-sand-100 rounded-sm w-10 h-10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          className="hidden max-md:block bg-sand-50 border-sand-200 border-t border-b"
          ref={mobileMenuRef}
        >
          <ul className="flex flex-col p-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block px-4 py-3 rounded-sm transition-colors",
                    isActiveLink(link.href)
                      ? "text-amber-700"
                      : "text-sand-700 hover:bg-sand-100",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
