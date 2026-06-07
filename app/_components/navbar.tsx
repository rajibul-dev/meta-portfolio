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
    <header className="border-b h-17 border-sand-200">
      <div className="container h-full mx-auto flex items-center justify-between">
        {/* logo basically */}
        <Wordmark />

        {/* navigation links */}
        <nav className="hidden md:block h-full">
          <ul className="flex gap-8 h-full items-stretch">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="h-full">
                <Link
                  href={link.href}
                  className={clsx(
                    isActiveLink(link.href)
                      ? "text-amber-700"
                      : "text-sand-500 hover:text-sand-700",
                    `text-sm h-full flex items-center tracking-wide uppercase font-semibold transition-colors`,
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
          className="bg-brown cursor-pointer px-5 hover:bg-amber-700 text-sand-100"
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
