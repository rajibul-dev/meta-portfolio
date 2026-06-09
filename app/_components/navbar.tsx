"use client";
import clsx from "clsx";
import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Wordmark from "./wordmark";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Lab", href: "/lab" },
];

export default function Navbar() {
  const currentPath = usePathname();

  function isActiveLink(href: string) {
    if (href === "/") {
      return currentPath === "/";
    } else {
      return currentPath.startsWith(href);
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b h-(--header-height) border-sand-200 bg-sand-50/70 backdrop-blur-sm">
      <div className="flex justify-between items-center mx-auto px-4 h-full primary-container">
        {/* logo basically */}
        <Wordmark />

        {/* navigation links */}
        <nav className="max-md:hidden h-full">
          <ul className="flex items-stretch gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="h-full">
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
        <Button
          asChild
          size={"lg"}
          className="bg-brown hover:bg-amber-700 px-5 text-sand-100 cursor-pointer"
        >
          <Link href="/contact">
            <Mail />
            Contact
          </Link>
        </Button>
      </div>
    </header>
  );
}
